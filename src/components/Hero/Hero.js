import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There 👋 <br/> Welcome to NexusCode
      </SectionTitle>
      <SectionText>
        Here you are going to find the stunning projects made by Gabriel Camacho
      </SectionText>
      <Button onClick={() => window.location = 'mailto:contact@nexuscode.dev'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;