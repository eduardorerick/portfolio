import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Fiz cursos completos pelo Curso em Vídeo de HTML5, CSS3 e Javascript. Responsive Web Design e Data Algotirhms and Structures pela freeCodeCamp. The Modern React Bootcamp (Hooks, Context, NextJS, Router) por Colt Stelle. Atualmente aluno da turma Ignite pela Rocketseat na trilha JS
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia com : <br/> 
            React, Javascript. <br/> 
            HTML5, CSS3. <br/> Estrutura de dados. <br/> Programação orientada a objetos.np <br/>Consumo de API.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Aprendendo <br />Node-js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX Design</ListTitle>
          <ListParagraph>
            Experiencia com <br />Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
