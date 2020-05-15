import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar className="navbar__container">
          <img src={logo} alt="Catalog-of-Books"/>
          <Typography variant="h6" className="navbar__title">Catalog of Books</Typography>
          <Button className="navbar__link">Books</Button>
          <Button className="navbar__link">Authors</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
