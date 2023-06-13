import React, {useState} from 'react';
import styled from 'styled-components';
import logo from '../images/logoTemporal.png'
import { NavBarContainer, NavBarWrapper, IconLogo, Menu, MenuItem, MenuItemLink, IconLogoMobile } from './NavBar.elements';
import {FaBars, FaTimesCircle} from 'react-icons/fa';

const NavBar = () => {
    const [click,setClick] = useState(false);
    
    const ChangeClick = () =>{
        setClick(!click);
    }; 
    return (
        <>   
        <NavBarContainer>
            <NavBarWrapper>
                <IconLogo>
                    <a><img src={logo}/></a>
                </IconLogo>

                <IconLogoMobile onClick={() => ChangeClick()}>
                    {click ? <FaTimesCircle/> : <FaBars/>}
                </IconLogoMobile>

                <Menu click = {click}>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink>INICIO</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink>CONTACTO</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink>SOBRE NOSOTROS</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <MenuItemLink>LOGIN</MenuItemLink>
                    </MenuItem>
                </Menu>
            </NavBarWrapper>
        </NavBarContainer>
        </>
    );
}

export default NavBar;
