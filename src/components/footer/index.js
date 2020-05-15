import React from 'react';
import './styles.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => (
  <div>
    <AppBar className="footer" position="footer" >
      <Toolbar class="footer__toolbar">
        <Box display="flex" alignItems="center"><Typography variant="h5">Catalog of Books</Typography></Box>
        <div className="footer__info">
          <Link component="button" variant="h6" color="inherit">Contact</Link>
          <div className="footer__icons-container">
            <TwitterIcon className="footer__icons" />
            <FacebookIcon className="footer__fb footer__icons" />
            <InstagramIcon className="footer__icons" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Footer;
