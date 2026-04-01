import React from 'react';
import styled from 'styled-components';
import { Download, Github, Linkedin, Send } from 'lucide-react';

// --- Styled Components ---

const PageContainer = styled.div`
  background-color: #f8fafc;
  color: #0f172a;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e2e8f0;
  z-index: 50;
  padding: 1rem 0;
`;

const NavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;

const HeroSection = styled.section`
  padding: 8rem 1.5rem 5rem;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
  border: 4px solid white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  object-fit: cover;
`;

const ExperienceCard = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #2563eb;
  margin-bottom: 3rem;

  &::before {
    content: '';
    position: absolute;
    left: -9px;
    top: 5px;
    width: 1rem;
    height: 1rem;
    background-color: #2563eb;
    border-radius: 50%;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 4rem auto;
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  outline: none;
  &:focus { border-color: #2563eb; }
`;

// --- Main Component ---

const RedesignPortfolio = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavContent>
          <strong style={{fontSize: '1.5rem'}}>Pravin</strong>
          <div style={{display: 'flex', gap: '2rem'}}>
            <a href="#exp">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </NavContent>
      </Navbar>

      <HeroSection>
        <ProfileImage src="/api/placeholder/200/200" alt="Pravin" />
        <div>
          <h1 style={{fontSize: '3.5rem', margin: '0 0 1rem'}}>Full Stack Developer</h1>
          <p style={{fontSize: '1.25rem', color: '#64748b', marginBottom: '1.5rem'}}>
            Bridging MERN Stack efficiency with Java Spring Boot scalability.
          </p>
          <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
            <Button href="/resume.pdf" download>
              <Download size={18} /> Resume
            </Button>
            {/* <Github style={{cursor: 'pointer'}} />
            <Linkedin style={{cursor: 'pointer'}} /> */}
          </div>
        </div>
      </HeroSection>

      <section id="exp" style={{maxWidth: '1000px', margin: '5rem auto', padding: '0 1.5rem'}}>
        <h2 style={{fontSize: '2rem', marginBottom: '3rem'}}>Experience</h2>
        <ExperienceCard>
          <h3 style={{margin: 0}}>Systems Engineer</h3>
          <span style={{color: '#2563eb', fontWeight: 600}}>Tata Consultancy Services</span>
          <p style={{color: '#64748b', fontSize: '0.9rem'}}>2023 - Present</p>
          <ul style={{marginTop: '1rem', color: '#475569', lineHeight: 1.6}}>
            <li>Developing end-to-end features using React and Node.js.</li>
            <li>Collaborating on Java Spring Boot backend migrations.</li>
          </ul>
        </ExperienceCard>
      </section>

      <ContactForm id="contact">
        <h2 style={{textAlign: 'center', margin: 0}}>{"Let's Connect"}</h2>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <textarea 
          placeholder="Your Message" 
          style={{padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', height: '100px'}} 
        />
        <Button as="button" type="submit" style={{justifyContent: 'center', border: 'none', cursor: 'pointer'}}>
          <Send size={18} /> Send
        </Button>
      </ContactForm>
    </PageContainer>
  );
};

export default RedesignPortfolio;