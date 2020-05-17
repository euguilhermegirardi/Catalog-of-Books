import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 0 18rem;
  background-color: #01579b;
  color: #fff;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
`;

export const Links = styled(Link)`
  flex-grow: 1;
  font-size: 1.2rem;
  padding: 1rem;
  text-decoration: none;
  color: #fff;
`;
