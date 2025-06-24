import { styled } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(to bottom, #f9fafb, #e2e8f0);
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  color: #1e293b;
  margin-bottom: 60px;
  position: relative;

  &::after {
    content: "";
    width: 70px;
    height: 4px;
    background-color: #3b82f6;
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
  background: #ffffff;
  border-radius: 14px;
  padding: 25px 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
  }

  h3 {
    font-size: 1.3rem;
    color: #0f172a;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    color: #475569;
    font-size: 0.95rem;
  }
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
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

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #1e293b;
  }

  h4 {
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: #334155;
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
