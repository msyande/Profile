// src/components/Navbar.tsx
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 90%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0f172a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #1e3a8a;
    }
  }

  @media (max-width: 768px) {
    display: none; /* You can replace this with a mobile menu later */
  }
`;

const ContactButton = styled.a`
  padding: 10px 20px;
  background-color: #0f172a;
  color: #fff;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background-color: #1e3a8a;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo></Logo>
      <NavLinks>
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <ContactButton href="#contact">Contact Me</ContactButton>
      </NavLinks>
    </Nav>
  );
}
