import { SimpleGrid } from "@chakra-ui/react";
import SolidButtonUI from "../SolidButton/SolidButton";
import TextAreaUI from "../TextArea/TextArea";
import TextInputUI from "../TextInput/TextInput";

function FormUI() {
  return (
    <>
      <SimpleGrid columns={2} spacing={'32px'} >
        <TextInputUI placeholder={'Name'} />
        <TextInputUI placeholder={'Last Name'} />
        <TextInputUI placeholder={'E-mail'} />
        <TextInputUI placeholder={'Phone number'} />
      </SimpleGrid>
      <TextAreaUI />
      <SolidButtonUI text='Submit now' />
    </>
  );
}

export default FormUI;