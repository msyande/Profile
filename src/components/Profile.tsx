import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProfileImg from "../images/profile.jpeg";
import { FiDownload } from "react-icons/fi";

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
  padding-left: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-right: 130px;
`;
const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
`;
const Title = styled.h2`
  font-size: 1.25rem;
`;
const Intro = styled.p`
  font-size: 1rem;
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
  width: 450px;
  height: 750px;
  object-fit: cover;
  border-radius: 180px / 240px;
  border: 6px solid #38bdf8;
  box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.6);
  animation: pulse 2.5s infinite;
  &:hover {
    animation: none;
    transform: scale(1.04);
    box-shadow: 0 16px 36px rgba(56, 189, 248, 0.5);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.4);
    }
    70% {
      box-shadow: 0 0 0 36px rgba(56, 189, 248, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  width: 200px;
  margin-top: 50px;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #6b21a8, #3b82f6);
  border: none;
  border-radius: 40px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.5);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 12px rgba(59, 130, 246, 0.2);
  }
`;
const Icon = styled(FiDownload)`
  font-size: 1.2rem;
`;

export default function Profile() {
  return (
    <Section>
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
            <a
              href="https://github.com/msyande"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mahima-yande-84a213189"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </IconRow>
          <DownloadButton href="/MahimaYandeResume.pdf" download>
            <Icon style={{ marginRight: "8px" }} />
            Download Resume
          </DownloadButton>
        </Left>

        <Right>
          <ProfileImage src={ProfileImg} alt="Mahima Yande" />
        </Right>
      </StyledComponent>
    </Section>
  );
}
