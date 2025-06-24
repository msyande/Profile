import { styled } from "styled-components";

export const Section = styled.section`
  padding: 150px 20px;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  color: #f8fafc;

  &::after {
    content: "";
    width: 70px;
    height: 4px;
    background-color: #38bdf8;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 150px;
  background: #366baf;
  border-radius: 14px;
  padding: 25px 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: #f8fafc;
  }

  p {
    margin: 0;
    color: #cbd5e1;
    font-size: 1.1rem;
    padding-bottom: 35px;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  h3 {
    margin: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  position: relative;
  background: #ffffff;
  padding: 35px 30px;
  border-radius: 12px;
  max-width: 520px;
  width: 90%;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.2);
  max-height: 80vh;
  overflow-y: auto;
  color: #1e293b;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  h4 {
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #334155;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #475569;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
    font-size: 0.95rem;
    color: #475569;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #1e293b;
  }
`;
