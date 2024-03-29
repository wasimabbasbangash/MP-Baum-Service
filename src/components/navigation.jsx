import React from "react";

import logo from "../assets/img/logo_mp.png";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {" "}
            <span className='sr-only'>Toggle navigation</span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
          </button>
          <div className='navbar-logo'>
            <img className='navbar-brand page-scroll' src={logo} alt='' />
            <a className='navbar-brand page-scroll' href='#page-top'>
              MP Baum Service
            </a>{" "}
          </div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#services' className='page-scroll'>
                Service
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Galarie
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Bewertung
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                über uns
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
