import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Eduardo Rerick <br/> 
        Desenvolvedor Front-end
      </SectionTitle>
      <SectionText>
      Bem-vindo ao meu portfolio! Sou Eduardo, desenvolvedor Front-end. Gosto de trabalhar com ReactJS, Typescript e NextJS, sinta-se a vontade de me mandar uma mensagem e trocar uma idéia! 
      </SectionText>
      <Button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=eduardorerick@gmail.com', '_blank')}>
        Enviar email
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;