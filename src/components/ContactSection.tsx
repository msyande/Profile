import styled from "styled-components";
import { FaEnvelope, FaTwitter, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Section = styled.section`
  background-color: #f1f5f9;
  padding: 80px 20px;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #1e293b;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Cards = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #3b82f6;
  margin-bottom: 10px;
`;

const Label = styled.h4`
  font-size: 1.2rem;
  color: #1e293b;
`;

const Info = styled.p`
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 10px;
`;

const MessageLink = styled.a`
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_7vsxsqr",
        "template_dpnfcbj",
        formRef.current,
        "J1xqH1yKNujfnxhOS"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Title>Contact Me</Title>
        <ContentWrapper>
          {/* Left: Contact Cards */}
          <Cards>
            <Card>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <Label>Email</Label>
              <Info>mahima.yande21@gmail.com</Info>
              <MessageLink href="mailto:mahima.yande21@gmail.com">
                Send a message
              </MessageLink>
            </Card>

            <Card>
              <IconWrapper>
                <FaTwitter />
              </IconWrapper>
              <Label>Twitter</Label>
              <Info>@MahimaYande</Info>
              <MessageLink
                href="https://x.com/MahimaYande"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </MessageLink>
            </Card>

            <Card>
              <IconWrapper>
                <FaWhatsapp />
              </IconWrapper>
              <Label>WhatsApp</Label>
              <Info>+91-9673730944</Info>
              <MessageLink
                href="https://wa.me/919673730944"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </MessageLink>
            </Card>
          </Cards>
          <FormWrapper>
            <Form ref={formRef} onSubmit={sendEmail}>
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <TextArea name="message" placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
              {success && (
                <p style={{ color: "green" }}>Message sent successfully!</p>
              )}
            </Form>
          </FormWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
// emailjs.send("service_7vsxsqr","template_dpnfcbj");
// publicKey: J1xqH1yKNujfnxhOS
