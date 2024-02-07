import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div className="c-not-found">
        <img
          className="c-not-found__icon"
          src="/public/images/confusedparrot.gif"
          alt="confused parrot"
        />
        <div className="c-not-found__title">
          404
        </div>
        <div className="c-not-found__body">
          This is not the place you were looking for.
        </div>
      </div>
    );
  }
}
