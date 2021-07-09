import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 12, text: 'Repositórios Públicos'},
  { number: 23, text: 'Seguidores', },
  { number: 24, text: 'Estrelas no Github', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Conquistas Pessoais</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
