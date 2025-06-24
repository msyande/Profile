import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  padding: 14px 30px;
  background: rgba(56, 189, 248, 0.15);
  backdrop-filter: blur(8px);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #0f172a;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactButton = styled.a`
  padding: 8px 18px;
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
      <NavLinks>
        <a href="#about">About me</a>
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact Me</a>
      </NavLinks>
    </Nav>
  );
}
