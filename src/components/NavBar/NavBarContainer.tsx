import { Flex } from "@chakra-ui/react"

interface navProps {
  children: React.ReactNode;
}

const NavBarContainer  = ({ children, ...props }: navProps) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={1}
        p={8}
       // bg={["teal.500", "teal.500", "transparent", "transparent"]}
        bg="teal.500"
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  }
  export default NavBarContainer;