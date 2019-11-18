import React from "react";
import "./navigation.scss";


const Navigation = () => (
  <div className="">
    <p className="nav-brand f2 white">
      <img src="https://img.icons8.com/office/48/000000/user-female-skin-type-6.png" alt='logo' />
    </p>
    <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>

            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="https://github.com/bamiogunfemi" target="_blank"class="navigation__link"><span>01</span>GITHUB</a></li>
                    <li class="navigation__item"><a href="https://docs.google.com/document/d/1e53HfyKFHUlmFlSLxsktlDy4L0JQ71GeCWASn4eNR2w/export?format=pdf" download="Ayobami-Arafah-Ogunfemi-resume" class="navigation__link"><span>02</span>RESUME</a></li>
                    </ul>
            </nav>
        </div>
  </div>
);
export default Navigation;
