import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import InputField from "../../components/InputField";

export interface Producprops {
  List: ProductListProps[];
  UPdateList: Function;
}

export interface ProductListProps {
  Name: string;

  Price: number | null;

  Quantity: number | null;
}
export default function CreateProductList(ProductList: Producprops) {
  const changVale = (value: string, index: number, name: string) => {

    const indexl = [...ProductList.List];
    if (name === `Name`) {
      indexl[index] = { ...indexl[index], [name]: value };
    } else {
      indexl[index] = { ...indexl[index], [name]: parseInt(value) };
    }
    ProductList.UPdateList(indexl);


  };

  const removeItem = (index: HTMLTextAreaElement) => {
    const indexl = [...ProductList.List];
    indexl.splice(parseInt(index.id), 1);
    ProductList.UPdateList([...indexl]);
  };
  return (
    <>
      <VStack spacing={1} align="flex-start">
        <Button
          onClick={() =>
            ProductList.UPdateList([
              ...ProductList.List,
              {
                Name: "",

                Price: null,

                Quantity: null,

                BillId: null,
              },
            ])
          }
          colorScheme="green"
        >
          إضافة منتج
        </Button>
        {ProductList.List.map((item, index) => (
          <div  key={index}>
          <HStack >
            <InputField
              type="text"
              required
              value={ProductList.List[index].Name}
              onChange={(e: any) => changVale(e.target.value, index, "Name")}
              name={`${index}Name`}
              placeholder="اسم المنتج "
              label=""
            />
            <InputField
              type="number"
              required
              name={`${index}Quantity`}
              placeholder="الكمية  "
              value={ProductList.List[index].Quantity === null ? "" : ProductList.List[index].Quantity}
              onChange={(e: any) =>
                changVale(e.target.value, index, "Quantity")
              }
              label=""
            />
            <InputField
              type="number"
              required
              onChange={(e: any) => changVale(e.target.value, index, "Price")}
              value={ProductList.List[index].Price === null ? "":ProductList.List[index].Price}
              name={`${index}Price`}
              placeholder="السعر  "
              label=""
            />

            <FormControl>
              <FormLabel></FormLabel>
              <Button
                id={"" + index}
                onClick={(e) => removeItem(e.target as HTMLTextAreaElement)}
                colorScheme="green"
              >
                حذف
              </Button>
            </FormControl>
          </HStack>
          </div>
        ))}
      </VStack>
    </>
  );
}
