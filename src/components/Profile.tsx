import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProfileImg from "../images/Profile.jpeg";
import Navbar from "./Navbar.tsx";

const Section = styled.section`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
const StyledComponent = styled.div`
  display: inline-flex;
  height: 100vh;
  width: 100%;
`;
const Left = styled.div`
  flex: 1;
  background-color: #e2e8f0;
  padding: 100px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #0f172a;
  margin: 10px 0;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: #475569;
`;

const Intro = styled.p`
  font-size: 1rem;
  color: #334155;
  margin-top: 20px;
  max-width: 400px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  a {
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;

    &:hover {
      background-color: #cbd5e1;
    }

    svg {
      color: #0f172a;
      font-size: 20px;
    }
  }
`;

const ProfileImage = styled.img`
  max-height: 80%;
  object-fit: cover;
  border-radius: 8px;
`;

export default function Profile() {
  return (
    <Section>
      <Navbar />
      <StyledComponent>
        <Left>
          <p>Hi, I am</p>
          <Name>Mahima Yande</Name>
          <Title>Software Development Engineer</Title>
          <Intro>
            I build elegant, responsive web applications using React,
            TypeScript, and modern frontend technologies.
          </Intro>
          <IconRow>
            <a href="mailto:mahima.yande21@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://github.com/msyande">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mahima-yande-84a213189">
              <FaLinkedin />
            </a>
          </IconRow>
        </Left>

        <Right>
          <ProfileImage src={ProfileImg} alt="Mahima Yande" />
        </Right>
      </StyledComponent>
    </Section>
  );
}
