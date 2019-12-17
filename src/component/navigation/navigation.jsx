import React from "react";
import "./navigation.scss";


const Navigation = () => (
  <div className="">
    {/* <p className="nav-brand f2 white">
      <img src="https://img.icons8.com/office/48/000000/user-female-skin-type-6.png" alt='logo' />
    </p> */}
    <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="https://github.com/bamiogunfemi" rel="noopener noreferrer" target="_blank"className="navigation__link"><span>01</span>GITHUB</a></li>
                    <li className="navigation__item"><a href="https://docs.google.com/document/d/1e53HfyKFHUlmFlSLxsktlDy4L0JQ71GeCWASn4eNR2w/export?format=pdf" rel="noopener noreferrer" download="Ayobami-Arafah-Ogunfemi-resume" className="navigation__link"><span>02</span>RESUME</a></li>
                    </ul>
            </nav>
        </div>
  </div>
);
export default Navigation;
