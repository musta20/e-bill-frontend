import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { useBillsQuery } from "../../generated/generated-frontend";

interface IBillListProps {}

const BillList: React.FunctionComponent<IBillListProps> = (props) => {
  const [{data,error,fetching}] = useBillsQuery();

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
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>رقم الفاتورة</Th>
              <Th>رقم العميل</Th>
              <Th>اسم العميل </Th>
              <Th>طباعة</Th>
            </Tr>
          </Thead>
          {data?.Bills ? (
            <Tbody >
              {data?.Bills.map((item,i) => (
                <Tr key={i}>
                  <Td>{item._id}</Td>
                  <Td>{item.CustomerId}</Td>
                  <Td>{item.CustomerName}</Td>
                  <Td>
                    <Button 
                    onClick={()=>{
                   const w =  window.open(`${process.env.REACT_APP_BACKEND_URL}/PDF/${item.PdfName}.pdf`, '_blank');
        if( w) {
          w.focus();
        }
                   
                    }} 
                     
                
                    >
                      طباعة
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          ) : null}
        </Table>
      </TableContainer>
    </>
  );
};

export default BillList;
