import CartWidget from "./CartWidget";
import { Flex, Box, Spacer, Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <Flex bg='gray.600' color='yellow.400'>
            <Box p='4'>
                <Link to={'/'}>
                    <h1> Tienda del buhonero </h1>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to='/productos/refrigeracion'>
                            <p> Refrigeración Líquida</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/productos/memorias'>
                            <p>Memorias RAM</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/productos/tarjetas'>
                            <p>Placas de Video</p>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='2' backgroundColor='#d2d9c1' borderRadius='md'>
                <CartWidget />
            </Box>
        </Flex>
    );
}

export default NavBar;