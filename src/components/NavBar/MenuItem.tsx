import {Link} from "react-router-dom"
import { Text } from "@chakra-ui/react"
import { ReactNode } from "react";
interface MenuItemProps {
  to: any,
  children:ReactNode | null
}

function MenuItem (props:MenuItemProps )  {
    return (
      <div>
      <Link   role={"button"}  to={props.to}>
        <Text p={1}   rounded="md"      _hover={{ bg: "teal.600"  }}
 >
          {props.children}
        </Text>
        
      </Link>
      </div>
    )
  }

  export default MenuItem;