import styled from "styled-components";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #1e293b;
  color: #f8fafc;
  padding: 40px 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #f8fafc;
    font-size: 1.4rem;
    transition: color 0.3s;

    &:hover {
      color: #60a5fa;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 15px;

  a {
    color: #cbd5e1;
    font-size: 0.95rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

const Copy = styled.p`
  font-size: 0.85rem;
  color: #94a3b8;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </SocialLinks>

      <NavLinks>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </NavLinks>

      <Copy>
        © {new Date().getFullYear()} Mahima Yande. All rights reserved.
      </Copy>
    </FooterContainer>
  );
};

export default Footer;
