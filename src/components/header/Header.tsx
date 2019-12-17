import React, { useState } from 'react';
import Logo from '../common/logo/Logo';
import logoImg from '../../assets/images/youtube.png';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  const [searchText, setText] = useState<string>('');

  return (
    <div className="container-fluid">
      <div className="header-wrapper">
        <Logo
          link="/"
          logoClass="logo"
          logoImg={logoImg}
          logoAlt={'logo-youtube'}
        />
        
        <div className="search-section">
          <div className="search-wrap">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setText(e.currentTarget.value)}
            />
            <div className="input-group-append">
              <Link
                to={`/search/${searchText}`}
              >
                <button className="btn-search"><i className="fa fa-search"></i></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
