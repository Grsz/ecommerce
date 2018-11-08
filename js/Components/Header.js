import React from 'react';
import { images } from '../../images';

const Header = ({ children }) => {
    return <header>
        <div className="bar">
            <div className="baritem">
                <img src={images.telephone} alt="tel" />
                <p className="sm">1337 1337 1337</p>
            </div>
            <div className="baritem">
                <img src={images.flag} alt="flag" />
                <p className="sm">Try another castle</p>
            </div>
        </div>
        <img src={images.logo} alt="logo" />
        {children}
    </header>
}

export default Header