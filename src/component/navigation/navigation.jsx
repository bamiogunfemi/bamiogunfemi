import React from "react";
import "./navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="">
    <p className="nav-brand f2 white">
      <img src="https://img.icons8.com/office/48/000000/user-female-skin-type-6.png" />
    </p>
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <Link className="option" to="/about">
            <li class="navigation__item">
              <a href="/about" class="navigation__link">
                <span>01</span>About
              </a>
            </li>
          </Link>
          <Link to="/work">
            <li class="navigation__item">
              <a href="/works" class="navigation__link">
                <span>02</span>Works
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  </div>
);
export default Navigation;
