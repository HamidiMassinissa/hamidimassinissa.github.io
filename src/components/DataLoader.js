import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown';


export default class DataLoader extends Component {
  state = {
    data: undefined,
    markdown: undefined,
    isSpinnerVisible: false,
  };

  componentDidMount() {
    if (this.props.json) {
        setTimeout(() => this.setSpinnerVisible(), 500);
        fetch(this.props.json).then(response => {

            console.log(this.props.json);

            /* load markdown if asked so */
            if (this.props.markdown) {
                setTimeout(() => this.setSpinnerVisible(), 500);
                console.log(this.props.markdown);
                fetch(this.props.markdown).then(response => {
                	return response.text();
                }).then(markdown => {
                	this.setState({ markdown: markdown });
                }).catch(err => {
                  this.setState({ markdown: null });
                  console.error('Failed to load data:', err);
                });
            }


            /* return loaded json */
        	return response.json();

        }).then(data => {
        	this.setState({ data: data });
        }).catch(err => {
          this.setState({ data: null });
          console.error('Failed to load data:', err);
        });
    }
  }

  setSpinnerVisible() {
    this.setState({ isSpinnerVisible: true });
  }

  render() {
    const { data, markdown, isSpinnerVisible } = this.state;
    const { children } = this.props;
    const body = data ? React.cloneElement(this.props.children, { data, markdown }) : null;
    const spinner = isSpinnerVisible && (data === undefined) ? (
      <div className="c-data-loader__spinner">
        <span className="u-spinner">
          <i className="fa fa-circle-o-notch fa-spin" />
        </span>
      </div>
    ) : null;
    const error = data === null ? (
      <div className="c-data-loader__error">
        <div className="u-text">
          <span className="u-inline-icon">
            <i className="fa fa-exclamation-triangle" />
          </span>
          Failed to load the page content. Please refresh the page to try loading the content again.
        </div>
      </div>
    ) : null;
    return (
      <div className="c-data-loader">
        {body}
        {spinner}
        {error}
      </div>
    );
  }
}
