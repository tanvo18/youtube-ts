import React, { useState } from 'react';
import Logo from '../common/logo/Logo';
import logoImg from '../../assets/images/youtube.png';
import './header.scss';
import { Link } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface ChildComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const Header: React.FC<ChildComponentProps> = ({ history }): JSX.Element => {
  const [searchText, setText] = useState<string>('');
  const handleClickSearchBtn = (e: React.MouseEvent<HTMLElement>, searchText: string) => {
    history.push(`/search/${searchText}`);
  };

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
                <button
                  className="btn-search"
                  onClick={(e) => handleClickSearchBtn(e, searchText)}
                >
                  <i className="fa fa-search"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
