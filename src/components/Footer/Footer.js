import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Me chame no Whatsapp!</LinkTitle>
          <LinkItem href="https://wa.me/5591989799485" target="_blank"><AiOutlineWhatsApp size="4rem"/></LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=eduardorerick@gmail.com' target="_blank">eduardorerick@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Sempre buscando o próximo nível!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/eduardorerick" target="_blank">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/eduardo-rerick-4799191a0/" target="_blank">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/eduardorerick/" target="_blank">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
