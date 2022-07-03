
import { Box,  Text ,  Stack, Heading, Container } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
function MyApp() {
  
  return  <Layout >
 
 <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           نظام الفواتير الاكترونية <br />
            <Text as={'span'} color={'green.400'}>
            إنشاء فاتورة الكترونية معتمدة في ثواني
            </Text>
          </Heading>
          <Text color={'gray.500'} >
            نظام انشاء الفاوتير الالكتروني
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
           
         
          </Stack>
        </Stack>
      </Container>
    </Layout>
  
}



export default MyApp;
