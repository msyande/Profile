import styled from "styled-components";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import bootstrap from "../images/icons/bootstrap.svg";
import javascript from "../images/icons/javascript.svg";
import figma from "../images/icons/figma.svg";
import typescript from "../images/icons/typescript.svg";
import react from "../images/icons/react.svg";
import git from "../images/icons/git.svg";
import android from "../images/icons/android.svg";
import redux from "../images/icons/redux.svg";
import jsx from "../images/icons/jsx.svg";
import restApi from "../images/icons/restApi.svg";
import cypress from "../images/icons/cypress.svg";
import agGrid from "../images/icons/agGrid.svg";
import testing from "../images/icons/testing.svg";
import intellij from "../images/icons/intellij.svg";
import vsCode from "../images/icons/vsCode.svg";
import jira from "../images/icons/jira.svg";
import micronaut from "../images/icons/micronaut.svg";

const Section = styled.section`
  padding: 80px 40px;
  background: #f9fafb;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #1e293b;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 60px;
  text-align: -webkit-center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.7rem;
  color: #334155;
  margin-bottom: 30px;
  text-align: center;
  text-transform: capitalize;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 70%;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  object-fit: contain;
`;

const SkillName = styled.span`
  font-size: 0.95rem;
  color: #334155;
`;

const TECHNICAL_SKILLS = {
  programming_Languages: [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Redux", icon: redux },
    { name: "JSX", icon: jsx },
    { name: "Typescript", icon: typescript },
    { name: "Android", icon: android },
    { name: "GitHub", icon: git },
    { name: "Rest APIs", icon: restApi },
  ],
  frameworks_and_libraries: [
    { name: "React", icon: react },
    { name: "AG-Grid", icon: agGrid },
    { name: "React Testing Library", icon: testing },
    { name: "Cypress", icon: cypress },
    { name: "Micronaut", icon: micronaut },
  ],
  tools_and_IDE: [
    { name: "Figma", icon: figma },
    { name: "Git", icon: git },
    { name: "JIRA", icon: jira },
    { name: "VS Code", icon: vsCode },
    { name: "IntelliJ", icon: intellij },
  ],
};

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Title>Skills</Title>
      {Object.entries(TECHNICAL_SKILLS).map(([categoryName, skills]) => (
        <CategoryWrapper key={categoryName}>
          <CategoryTitle>{categoryName.replace(/_/g, " ")}</CategoryTitle>
          <Grid>
            {skills.map((skill) => (
              <SkillCard key={skill.name}>
                <SkillIcon src={skill.icon} alt={skill.name} />
                <SkillName>{skill.name}</SkillName>
              </SkillCard>
            ))}
          </Grid>
        </CategoryWrapper>
      ))}
    </Section>
  );
}
