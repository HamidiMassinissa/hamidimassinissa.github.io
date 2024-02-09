import React, { Component } from 'react'
import { render } from 'react-dom'
import { Marker, Popup, TileLayer } from 'react-leaflet'
import { SocialIcon } from 'react-social-icons';
import SimpleMap from './SimpleMap'


class Contact extends Component {

  renderSocialMedia() {
      var sm =
        <div>
        <SocialIcon style={{ height: 25, width: 25 }} url="mailto:massinissa.hamidi@univ-evry.fr"/>
        <SocialIcon style={{ height: 25, width: 25 }} url="https://github.com/hamidimassinissa"/>
        <SocialIcon style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/massinissahamidi"/>
        <SocialIcon style={{ height: 25, width: 25 }} url="https://www.twitter.com/realRoboticMind"/>
        <SocialIcon style={{ height: 25, width: 25 }} url="https://www.youtube.com/channel/UCO7jkOKWF8LEwwlnzBIPRGQ"/>
        </div>
      render(sm, document.getElementById('social-media'));
  }

  componentDidMount() {
      this.renderSocialMedia()
  }

  render() {
    return (
      <div className="c-contact">
        <div className="c-contact__items">
          <dt className="c-contact__label">
            Tel.
          </dt>
        	<dd className="c-contact__content">
            Tél. +33 (0)1 64 85 35 07
          </dd>
          <dt className="c-contact__label">
            Address
          </dt>
        	<dd className="c-contact__content">
            IBGBI, Université Évry Paris-Saclay <br/>
            23, Boulevard de France, 91034 – Évry
    		</dd>
          <dt className="c-contact__label">
            Social media
          </dt>
          <dd className="c-contact__content" id="social-media">
          </dd>
      	  <dt className="c-contact__label">
            Map
          </dt>
      		<dd className="c-contact__content">
            <div className="c-contact__map">
                <SimpleMap/>
            </div>
      		</dd>
        </div>
      </div>
    );
  }
}

export default Contact;
