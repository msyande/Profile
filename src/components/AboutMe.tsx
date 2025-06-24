import styled from "styled-components";

const Section = styled.div`
  height: 30vh;
  padding: 80px 20px;
  background-color: #f0f0f0;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const AboutMe = () => {
  return (
    <Section id="about">
      <Heading>About Me</Heading>
      <Paragraph>
        6+ years experience as a Full Stack Developer, highly skilled in web
        page development, Front-end Development, Back-end Development, Unit
        Test, Android, PL-SQL, etc. across the complete SDLC of the product.
        Skilled in translating business ideas to platform features using
        front-end technologies like React, Bootstrap, AG-Grid, and CSS, with
        full support for Desktop, tablets, and mobile. Adept at end-to-end
        software design & development including understanding designs from
        Figma. Handled complex projects, managed & coordinated work very
        efficiently to deliver results.
      </Paragraph>
    </Section>
  );
};

export default AboutMe;
