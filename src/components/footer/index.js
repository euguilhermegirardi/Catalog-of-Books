import React from 'react';
import { Container } from '../navbar/styles';
import { InfoContainer, LogoLink, Contact, IconsContainer } from './styles';
import Button from '@material-ui/core/Button';
import LinkContact from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => (
  <>
    <Container>
      <Button>
        <LogoLink to="/">Catalog of Books</LogoLink>
      </Button>

      <InfoContainer>
        <LinkContact>
          <Contact>Contact</Contact>
        </LinkContact>
        <IconsContainer>
          <TwitterIcon style={{cursor: 'pointer', width: '2.5rem', height: '2.5rem'}} />
          <FacebookIcon style={{cursor: 'pointer', margin: '0 1.5rem', width: '2.5rem', height: '2.5rem'}} />
          <InstagramIcon style={{cursor: 'pointer', width: '2.5rem', height: '2.5rem'}} />
        </IconsContainer>
      </InfoContainer>
    </Container>
  </>
);

export default Footer;
