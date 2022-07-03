import * as React from "react";
import { Form, Formik, FormikProps } from "formik";
import InputField from "../components/InputField";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import {
  useLoginUserMutation,
  useProfileQuery,
} from "../generated/generated-frontend";
import { mapErorr } from "../utils/mapErorr";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

export interface IsinupProps {
  email: string;

  Password: string;
}

export default function Login(props: IsinupProps | {}) {
  const [profile] = useProfileQuery();
  const [, login] = useLoginUserMutation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (profile.data?.Profile) navigate("/Profile");
  }, [profile, navigate]);
  return (
    <Layout>
      <Flex align="center" bg={"gray.100"} justify="center" w={"full"} h="90vh">
        <Box bg="white" dir="rtl" mt={0} p={2} rounded="md">
          <Formik
            initialValues={{
              email: "",
              Password: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await login({ userNameAndPassword: values });

              if (response.data?.loginUser?.errors) {
                return setErrors(mapErorr(response.data?.loginUser?.errors));
              }

              document.location = "/Profile";
            }}
          >
            {(props: FormikProps<IsinupProps>) => (
              <Form>
                <VStack spacing={1} align="flex-start">
                  <InputField
                    type="email"
                    name="email"
                    required
                    placeholder="البريد الالكتروني"
                    label="البريد الالكتروني"
                  />

                  <InputField
                  required
                    type="password"
                    name="Password"
                    placeholder="كلمة المرور"
                    label="كلمة المرور"
                  />

                  <Button
                    isLoading={props.isSubmitting}
                    type="submit"
                    colorScheme="green"
                    width="full"
                  >
                    تسجيل الدخول
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
