import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__body">
          <div className="c-footer__contact">
            Tel. +33 1 49.40.36.09 <br />
            Institut Galilée, Université Paris 13 <br/>
            99, avenue Jean-Baptiste Clément, 93430 – Villetaneuse
          </div>
          <div className="c-footer__links">
            <a
              className="c-footer__link"
              href="https://github.com/roboticsmind/roboticsmind.github.io"
              target="_blank"
            >
              Admin
            </a>
            <br/>
            <div className="c-footer__links">
              <a
                className="c-footer__link"
                href="http://uilab.kr/"
                target="_blank"
              >
                Credits: U&I Lab.
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
