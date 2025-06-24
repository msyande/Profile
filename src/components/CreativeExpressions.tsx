import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import face from "../images/drawings/face.jpeg";
import mandala1 from "../images/drawings/mandala1.jpeg";
import mandala2 from "../images/drawings/mandala2.jpeg";
import mandala3 from "../images/drawings/mandala3.jpeg";
import radhakrishna from "../images/drawings/radhakrishna.jpeg";
import sketch1 from "../images/drawings/sketch1.jpeg";
import sketch2 from "../images/drawings/sketch2.jpeg";
import sketch3 from "../images/drawings/sketch3.jpeg";

import rangoli1 from "../images/rangoli/rangoli1.jpeg";
import rangoli2 from "../images/rangoli/rangoli2.jpeg";
import rangoli3 from "../images/rangoli/rangoli3.jpeg";
import rangoli4 from "../images/rangoli/rangoli4.jpeg";
import rangoli5 from "../images/rangoli/rangoli5.jpeg";
import rangoli6 from "../images/rangoli/rangoli6.jpeg";
import rangoli7 from "../images/rangoli/rangoli7.jpeg";
import rangoli8 from "../images/rangoli/rangoli8.jpeg";
import rangoli9 from "../images/rangoli/rangoli9.jpeg";
import rangoli10 from "../images/rangoli/rangoli10.jpeg";

const Section = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 50px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const ArtCard = styled.div`
  background: #366baf;
  border-radius: 14px;
  padding: 40px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 260px;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: 2px solid #2a5388;
  &:hover {
    transform: scale(1.05);
  }
  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #1e293b;
  }
  span {
    font-size: 3rem;
    display: block;
    margin-bottom: 20px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 14px;
  padding: 20px;
  max-width: 90%;
  max-height: 80vh;
  text-align: center;
`;

const ModalImage = styled.img`
  max-height: 60vh;
  max-width: 80vw;
  object-fit: contain;
  border-radius: 10px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    background: #f1f5f9;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export default function CreativeExpressions() {
  const [selectedGallery, setSelectedGallery] = useState<
    "drawings" | "rangoli" | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleries = {
    drawings: [
      { title: "Face", image: face },
      { title: "Mandala Art", image: mandala1 },
      { title: "Mandala Art", image: mandala2 },
      { title: "Mandala Art", image: mandala3 },
      { title: "Radha Krishna", image: radhakrishna },
      { title: "Sketch", image: sketch1 },
      { title: "Sketch", image: sketch2 },
      { title: "Sketch", image: sketch3 },
    ],
    rangoli: [
      { title: "Rangoli 1", image: rangoli1 },
      { title: "Rangoli 2", image: rangoli2 },
      { title: "Rangoli 3", image: rangoli3 },
      { title: "Rangoli 4", image: rangoli4 },
      { title: "Rangoli 5", image: rangoli5 },
      { title: "Rangoli 6", image: rangoli6 },
      { title: "Rangoli 7", image: rangoli7 },
      { title: "Rangoli 8", image: rangoli8 },
      { title: "Rangoli 9", image: rangoli9 },
      { title: "Rangoli 10", image: rangoli10 },
    ],
  };

  const currentGallery = selectedGallery ? galleries[selectedGallery] : [];
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentGallery.length) % currentGallery.length
    );
  };
  const closeModal = () => {
    setSelectedGallery(null);
    setCurrentIndex(0);
  };

  return (
    <Section id="creative">
      <Title>Creative Expressions</Title>
      <Description>
        I love exploring creativity through drawing and rangoli. It sharpens my
        attention to detail and balance — skills I also apply in frontend
        development.
      </Description>

      <CardGrid>
        <ArtCard onClick={() => setSelectedGallery("drawings")}>
          <span>🖌️</span>
          <h3>Drawings</h3>
        </ArtCard>
        <ArtCard onClick={() => setSelectedGallery("rangoli")}>
          <span>🌸</span>
          <h3>Rangoli</h3>
        </ArtCard>
      </CardGrid>

      <AnimatePresence>
        {selectedGallery && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <ModalImage
                src={currentGallery[currentIndex].image}
                alt={currentGallery[currentIndex].title}
              />
              <p>{currentGallery[currentIndex].title}</p>
              <NavButton style={{ left: 10 }} onClick={prevImage}>
                ‹
              </NavButton>
              <NavButton style={{ right: 10 }} onClick={nextImage}>
                ›
              </NavButton>
            </ModalContent>
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
}
