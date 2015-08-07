/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Header {

  render() {
    return (
      <header className="header black-bg">
        <a href="/" className="logo" onClick={Link.handleClick}><b>Vilno group</b></a>
        
      </header>
    );
  }

}

export default Header;
