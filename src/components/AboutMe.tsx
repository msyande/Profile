import styled from "styled-components";

const Section = styled.section`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 30px;
  position: relative;
  color: #f8fafc;

  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #38bdf8;
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 900px;
  margin-top: 20px;
  padding: 0 10px;

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #cbd5e1;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const AboutMe = () => {
  return (
    <Section id="about">
      <Heading>About Me</Heading>
      <ParagraphContainer>
        <Paragraph>
          I'm a passionate Full Stack Developer with over 6 years of experience
          building robust, scalable, and responsive applications across the full
          software development lifecycle.
        </Paragraph>
        <Paragraph>
          I specialize in front-end development using React, Bootstrap, AG-Grid,
          and CSS, delivering seamless experiences across desktop, tablet, and
          mobile platforms. On the back end, I'm confident in developing
          reliable APIs and services, supported by experience with PL-SQL and
          thorough unit testing practices.
        </Paragraph>
        <Paragraph>
          I bring a strong ability to translate business requirements into
          platform features, collaborating closely with designers (e.g., Figma)
          and stakeholders to deliver user-focused solutions. My background
          includes managing complex projects independently, ensuring timely,
          high-quality deliveries through structured planning and efficient
          coordination.
        </Paragraph>
        <Paragraph>
          Whether it's crafting intuitive UIs or optimizing backend logic, I'm
          driven by a love for clean code, scalable architecture and impactful
          software.
        </Paragraph>
      </ParagraphContainer>
    </Section>
  );
};

export default AboutMe;
