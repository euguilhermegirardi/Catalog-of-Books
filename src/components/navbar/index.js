import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container, LogoContainer, LinkContainer, Links } from './styles';
import Button from '@material-ui/core/Button';

export default function Navbar() {
  return (
    <>
      <Container>
        <LogoContainer>
          <Link to="/"><img src={logo} alt="Catalog-of-Books"/></Link>
          <Button>
            <Links to="/">Catalog of Books</Links>
          </Button>
        </LogoContainer>

        <LinkContainer>
          <Button>
            <Links to="/books">Books</Links>
          </Button>
        </LinkContainer>
      </Container>
    </>
  );
}
