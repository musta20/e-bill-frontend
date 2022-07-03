import * as React from "react";


import { Layout } from "../../components/Layout";


import {
  Box,

  Drawer,
  DrawerContent,
  useDisclosure,
  AlertDescription,
  Spinner,
  AlertIcon,
  AlertTitle,
  Alert,
} from '@chakra-ui/react';

import AddBill from "./AddBill";
import { useNavigate } from "react-router-dom";
import {  useProfileQuery } from "../../generated/generated-frontend";
import {SidebarContent , MobileNav} from "./SideBar";
import BillList from "./billList";


export interface IsinupProps {
  Name: string;
  email: string;
  Adress: string;
  RegistrationNumber:  number ;
  Contact: string;
  Password: string;
}



export default function Profile() {

  const [page,setpage]=React.useState('إصدار فاتورة')
  const navigator= useNavigate();
const [{data,fetching,error}] = useProfileQuery()
const { isOpen, onOpen, onClose } = useDisclosure();


const CurrentPage = ()=>{
  switch (page) {
    case 'إصدار فاتورة':
      return <AddBill></AddBill>
      case 'الفواتير المصدرة':
        return <BillList></BillList>
    default:
      break;
  }
  }
  
React.useEffect(()=>{
  if(!data?.Profile)navigator('/')
},[data,navigator])

if(error){
  return <Alert status='error'>
  <AlertIcon />
  <AlertTitle>حدث خطاء</AlertTitle>
  <AlertDescription>الرجاء المحاولة لاحقا.</AlertDescription>
</Alert>
}


if(fetching){
return  <Spinner
thickness='4px'
speed='0.65s'
emptyColor='gray.200'
color='blue.500'
size='xl'
/>
}


return (
  
  <Layout>
  <SidebarContent
  setPage={setpage}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent   setPage={setpage}
 onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box  ml={{  md: 60 }} p="10">
{CurrentPage()}
      </Box>
   
  </Layout>

  );
}

