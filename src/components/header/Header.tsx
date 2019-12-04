import React from 'react';
import Logo from '../common/logo/Logo';
import logoImg from '../../assets/images/youtube.png';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <div className="header-wrapper container-fluid">
      <Logo
        link="/"
        logoClass="logo"
        logoImg={logoImg}
        logoAlt={'logo-youtube'}
      />

      <div className="search-wrap">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <div className="input-group-append">
          <button><i className="fa fa-search"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Header
