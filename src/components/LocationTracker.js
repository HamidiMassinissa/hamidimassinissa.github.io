import React, { Component } from 'react';

export default class LocationTracker extends Component {
  componentDidMount() {
    this.trackPageview();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPathname = prevProps.location.pathname;
    const pathname = this.props.location.pathname;
    if (prevPathname !== pathname) {
      this.trackPageview(pathname);
    }
  }

  trackPageview(pathname) {
    // ga('send', 'pageview', pathname);
  }

  render() {
    return <div className="c-location-tracker u-no-display" />
  }
}
