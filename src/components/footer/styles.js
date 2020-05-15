import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const LogoLink = styled(Link)`
  flex-grow: 1;
  padding: 2.5rem 1rem;
  text-decoration: none;
  color: #fff;
`;

export const Contact = styled.a`
  display: flex;
  justify-content: center;
  padding: 1rem;
  color: #fff;
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;
