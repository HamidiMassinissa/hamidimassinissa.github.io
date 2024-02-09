import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="c-footer__body">
          <div className="c-footer__contact">
            Tél. +33 (0)1 64 85 35 07 <br />
            IBGBI, Université Évry Paris-Saclay <br/>
            23, Boulevard de France, 91034 – Évry
          </div>
          <div className="c-footer__links">
            <a
              className="c-footer__link"
              href="https://github.com/hamidimassinissa/hamidimassinissa.github.io"
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
