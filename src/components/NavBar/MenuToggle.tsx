import { CloseIcon   } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react"
import { FiMenu } from "react-icons/fi";

interface menuProps {
  toggle: Function
  isOpen: Boolean
}
const MenuToggle = ({ toggle, isOpen }: menuProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={()=>toggle()}>
      {isOpen ?  <CloseIcon /> :   <FiMenu />}

    </Box>
  )
}
export default MenuToggle;