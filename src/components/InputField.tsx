import { useField } from "formik";
import {
  FormControl,
  FormErrorMessage,
  Input,
  FormLabel,
} from "@chakra-ui/react";


 
const InputField = ({...props }) => {
    const [field, meta,] = useField(props.name);

  return (
    <>
      <FormControl isInvalid={!!meta.error}>
        <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
        <Input 
      {...field} {...props}></Input>
        {meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export default InputField;
