import { Alert, AlertDescription, AlertIcon,AlertTitle, Spinner, Stack, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import {
  useLogoutMutation,
  useProfileQuery,
} from "../../generated/generated-frontend";
import MenuItem from "./MenuItem";
interface MenuLinkProp {
  isOpen: Boolean;
}
const MenuLinks = ({ isOpen }: MenuLinkProp) => {
  const [{data,error,fetching}] = useProfileQuery();

  

  const [, logout] = useLogoutMutation();




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
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        align="center"
        //"row", "row",
        // "space-between", "flex-end",
        justify={["center", "flex-end"]}
        direction={["column", "column", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {data?.Profile?.Name ? (
          <>
            <MenuItem to="/">الصفحة الرئيسية</MenuItem>

            <MenuItem to="/Profile">{data?.Profile?.Name}</MenuItem>
            <Text
              p={1}
              rounded="md"
              role={"button"}
              _hover={{ bg: "teal.600" }}
              onClick={() => {
                logout();
                document.location = "/";
              }}
            >
              تسجيل خروج
            </Text>
          </>
        ) : (
          <>
            <MenuItem to="/">الصفحة الرئيسية</MenuItem>
            <MenuItem to="/Login">تسجيل الدخول</MenuItem>
            <MenuItem to="/registration">إنشاء حساب</MenuItem>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
