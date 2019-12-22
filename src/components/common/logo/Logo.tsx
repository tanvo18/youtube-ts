import React from 'react'
import './logo.scss';

interface LogoProps {
  logoClass: string;
  logoImg: string;
  link: string;
  logoAlt: string;
}

const Logo: React.FC<LogoProps> = ({ logoClass, logoImg, link, logoAlt }) => {
  return (
    <div>
      <h1
        className={logoClass}
      >
        <a href={link}>
          <img src={logoImg} alt={logoAlt} />
        </a>
      </h1>
    </div>
  )
}

export default Logo
