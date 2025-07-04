import styled from "styled-components";
import { Bio } from "../data/constants";
import logo from '../assets/signature.png';

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.div`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
      display: none;
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const GitHubButton = styled.button`
    background-color: transparent;
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    :hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
        font-size: 14px;
    }
`;

const GithubMobileButton = styled.button`
    display: none;
    @media screen and (max-width: 768px) { 
        background-color: transparent;
        border: 1.8px solid ${({ theme }) => theme.primary};
        justify-content: center;
        display: flex;
        align-items: center;
        height: 70%;
        border-radius: 20px;
        color: ${({ theme }) => theme.primary};
        cursor: pointer;
        padding: 0 20px;
        font-weight: 500;
        text-decoration: none;
        font-size: 16px;
    }
`;

const ButtonContainer = styled.div`
    width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo><img src={logo} alt="" style={{width: '200px'}}/></NavLogo>
                <GithubMobileButton onClick={() => window.open(Bio.github)}>Github Profile</GithubMobileButton>
                <MobileIcon></MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    {/* <NavLink href="">Education</NavLink> */}
                </NavItems>
                <ButtonContainer>
                    <GitHubButton onClick={() => window.open(Bio.github)}>Github Profile</GitHubButton>
                </ButtonContainer>
            </NavContainer>
        </Nav>
    )
}

export default Navbar;