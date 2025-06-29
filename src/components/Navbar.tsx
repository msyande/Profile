import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaEllipsisH,
} from "react-icons/fa";

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
  align-items: center;
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1rem;
    padding: 10px 18px;
    border-radius: 30px;
    position: relative;
    transition: all 0.3s ease;
    &:hover {
      color: #0f172a;
      background: rgba(255, 255, 255, 0.1);
    }
    &.active {
      color: #0f172a;
      background: linear-gradient(145deg, #60a5fa, #38bdf8);
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>(
    window.location.hash || "#about"
  );

  useEffect(() => {
    const onHashChange = () => {
      setActiveSection(window.location.hash || "#about");
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <Nav>
      <NavLinks>
        <a href="#about" className={activeSection === "#about" ? "active" : ""}>
          <FaUserAlt size={16} /> About
        </a>
        <a
          href="#experiences"
          className={activeSection === "#experiences" ? "active" : ""}
        >
          <FaBriefcase size={16} /> Experience
        </a>
        <a
          href="#skills"
          className={activeSection === "#skills" ? "active" : ""}
        >
          <FaTools size={16} /> Skills
        </a>
        <a href="#more" className={activeSection === "#more" ? "active" : ""}>
          <FaEllipsisH size={16} /> More
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? "active" : ""}
        >
          <FaEnvelope size={16} /> Contact
        </a>
      </NavLinks>
    </Nav>
  );
}
