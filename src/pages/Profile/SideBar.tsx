

import {
    IconButton,
    Box,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Text,
    BoxProps,
    FlexProps,
  } from '@chakra-ui/react';
  import {
 
      FiCompass,
    FiMenu,
    FiTrendingUp,
  } from 'react-icons/fi';
  import { IconType } from 'react-icons';
  import { ReactText } from 'react';
interface SidebarProps extends BoxProps {
    onClose: () => void;
    setPage: (param:string) => void;
  }
  
  interface LinkItemProps {
    name: string;
    icon: IconType;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'إصدار فاتورة', icon: FiCompass },
    { name: 'الفواتير المصدرة', icon: FiTrendingUp },
  
  ];
  
  
  const SidebarContent = ({ onClose,setPage, ...rest }: SidebarProps) => {
    return (
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
    
        {LinkItems.map((link) => (
          <NavItem onClick={()=>{setPage(link.name)}} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };
  
  interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
  }
  
  const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
      <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  };
  
  interface MobileProps extends FlexProps {
    onOpen: () => void;
  }
  
  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent="flex-start"
        {...rest}>
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    );
  };

  export  {SidebarContent , MobileNav};