import styled from "styled-components";
import papersData from "../data/papers.json";

interface Paper {
  title: string;
  description: string;
  link: string;
  conference?: string;
  date?: string;
}

const Section = styled.section`
  padding: 100px 20px;
  background: linear-gradient(to bottom, #f9fafb, #e2e8f0);
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 60px;
  color: #1e293b;
  position: relative;

  &::after {
    content: "";
    width: 80px;
    height: 4px;
    background-color: #3b82f6;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;
const Grid = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const Card = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 30px 25px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
  }
`;
const PaperTitle = styled.h3`
  font-size: 1.4rem;
  color: #0f172a;
  margin-bottom: 12px;
`;
const Description = styled.p`
  font-size: 0.97rem;
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.6;
`;
const Meta = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 14px;
`;
const ViewLink = styled.a`
  font-size: 0.95rem;
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #2563eb;
  }
`;

export default function Papers() {
  return (
    <Section id="papers">
      <Container>
        <Title>Published Papers</Title>
        <Grid>
          {(papersData as Paper[]).map((paper, index) => (
            <Card key={index}>
              <PaperTitle>{paper.title}</PaperTitle>
              <Description>{paper.description}</Description>
              {(paper.conference || paper.date) && (
                <Meta>
                  {paper.conference ? `Published in: ${paper.conference}` : ""}{" "}
                  {paper.date ? `| ${paper.date}` : ""}
                </Meta>
              )}
              <ViewLink href={paper.link} target="_blank" rel="noreferrer">
                View Paper →
              </ViewLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
