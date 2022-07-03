import { Form, Formik, FormikProps } from "formik";
import InputField from "../components/InputField";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

import { mapErorr } from "../utils/mapErorr";
import { useCreateUserMutation } from "../generated/generated-frontend";
import { Layout } from "../components/Layout";

export interface IsinupProps {
  Name: string;
  email: string;
  Adress: string;
  RegistrationNumber: null ;
  Contact: string;
  Password: string;
}

export default function Registration(props: IsinupProps | {}) {
  const [, register] = useCreateUserMutation();

  return (
    <Layout>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box dir="rtl" bg="white" p={2} rounded="md">
          <Formik
            initialValues={{
              Name: "",
              email: "",
              Adress: "",
              RegistrationNumber:  null,
              Contact: "",
              Password: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await register({ userInput: values });

              if (response.data?.createUser?.errors)
                return setErrors(mapErorr(response.data?.createUser?.errors));

           
              document.location = "/Profile";
            }}
          >
            {(props: FormikProps<IsinupProps>) => (
              <Form>
                <VStack spacing={1} align="flex-start">
                  <InputField
                    type="text"
                    name="Name"
                    required
                    placeholder="اسم المؤسسة"
                    label="اسم المؤسسة"
                  />

                  <InputField
                    type="email"
                    name="email"
                    required
                    placeholder="البريد الالكتروني"
                    label="البريد الالكتروني"
                  />

                  <InputField
                    type="text"
                    name="Contact"
                    required
                    placeholder="رقم التواصل"
                    label="رقم التواصل"
                  />

                  <InputField
                    type="number"
                    required
                    value={props.values.RegistrationNumber===null ? "": props.values.RegistrationNumber}
                    name="RegistrationNumber"
                    placeholder="رقم السجل التجاري للمؤسسة"
                    label="رقم السجل التجاري للمؤسسة"
                  />

                  <InputField
                    type="text"
                    name="Adress"
                    required
                    placeholder="عنوان المؤسسة"
                    label="عنوان المؤسسة"
                  />
                  <InputField
                    type="password"
                    name="Password"
                    required
                    placeholder="كلمة المرور"
                    label="كلمة المرور"
                  />

                  <Button
                    isLoading={props.isSubmitting}
                    type="submit"
                    colorScheme="green"
                    width="full"
                  >
                    إنشاء حساب
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Layout>
  );
}
