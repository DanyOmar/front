import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    height: 90px;
    positiion: sticky;
    top:0;
    z-index:99;
    background-color: #125a89;
`

export const NavBarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height:100%;
    align-items:center;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

export const IconLogo = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
    max-width: 120px;
    img{
        width: 100%;
        height: 100%;
    }
`

export const Menu = styled.ul`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:960px){
        width:100%;
        height: 90vh;
        position:absolute;
        top:80px;
        left:${({click}) => (click ? 0 : '-100%')};
        flex-direction: column;
        transition: .5s all ease-in;
        background-color: #49426c;
    }
`

export const MenuItem = styled.li`
    height: 100%;
    padding: .5rem 1.5rem;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 1.2rem;
    font-family: 'Oswald';
    font-weight: 400;
    &:hover{
        background-color:#343257;
        border-bottom: .3rem solid #ebc88b;
        transition: .1s ease-in;
    }
    @media screen and (max-width:960px){
        width: 100%;
        height:70px;
    }
`

export const MenuItemLink = styled.a`
    text-dcoration: none;
    color: #fff;
`

export const IconLogoMobile = styled.div`
    display:none;
    @media screen and (max-width:960px){
        display:flex;
        color:#ebc88b;
        font-size: 2rem;
    }
`