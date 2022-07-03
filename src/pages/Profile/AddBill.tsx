import { Form, Formik, FormikProps } from "formik";
import InputField from "../../components/InputField";
import { Alert, AlertDescription, AlertIcon, Box, Button, VStack } from "@chakra-ui/react";

import { useCreateBillMutation } from "../../generated/generated-frontend";
import CreateProductList from "./CreateProdectList";
import { useState } from "react";
import { FileBill } from "./FileBill";
import { mapErorr } from "../../utils/mapErorr";

export interface IsinupProps {
  CustomerName: "";
  CustomerId: null;
  Total: 0;
}

export default function AddBill(props: IsinupProps | {}) {
  const [, creatbill] = useCreateBillMutation();
  const [pdf, setpdf] = useState("");
  const [ListError, setListError] = useState("");
  const [ProdectList, setProducetList] = useState([]);

  return (
    <Box  dir="rtl" display={'flex'} w={"100%"}>
      {pdf ? (
        <FileBill url={pdf}></FileBill>
      ) : (
        <Formik
          initialValues={{
            CustomerName: "",
            CustomerId: null,
            Total: 0,
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await creatbill({
              billInput: values,
              list: ProdectList,
            });

            console.log(response)
            if(response.data?.createBill.errors)
            {
              const isErrorlist = response.data.createBill.errors.find(item=>item.field==="List")
              //console.log(isErrorlist)
              if(isErrorlist) {setListError(isErrorlist.message); return;}
              setErrors(mapErorr(response.data.createBill.errors))
            }


            if (response.data?.createBill.Bill?.PdfName) {
            console.log('DID YOU RECIVE THE PDF')
              setpdf(response.data?.createBill?.Bill?.PdfName + ".pdf");
            }
          }}
        >
          {(props: FormikProps<IsinupProps>) => (
            <Form>
              <VStack spacing={1} align="flex-start">
                <InputField
                  type="text"
                  required
                  name="CustomerName"
                  placeholder="إسم العميل"
                  label="إسم العميل"
                />

                <InputField
                  type="number"
                  required
                  value={props.values.CustomerId === null ? "":props.values.CustomerId}
                  name="CustomerId"
                  placeholder="إثبات العميل"
                  label="إثبات العميل"
                />
                {ListError &&
<Alert status='error'>
<AlertIcon />
<AlertDescription>{ListError}</AlertDescription>
</Alert>}
                <CreateProductList
                  UPdateList={setProducetList}
                  List={ProdectList}
                ></CreateProductList>

                <Button
                  isLoading={props.isSubmitting}
                  type="submit"
                  colorScheme="green"
                  width="50"
                >
                  إتمام الشراء
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
}
