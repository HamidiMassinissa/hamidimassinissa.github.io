import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class TeachingTopic extends Component {
  renderIcon() {
    const {
      topic,
      hidden,
    } = this.props;

    const style = topic.color ? { color: topic.color } : {};
    return hidden ? (
      <i className="c-research-topic__check-icon fa fa-circle" style={style} />
    ) : (
      <i className="c-research-topic__check-icon fa fa-check-circle" style={style} />
    );
  }

  render() {
    const { 
      topic, 
      onClick,
      hidden,
      showTopic,
      hideTopic,
    } = this.props;

    return (
      <a 
        className={classnames(
          'c-research-topic',
          { 'c-research-topic--hidden': hidden }
        )}
        onClick={hidden ? showTopic : hideTopic}
      >
        {this.renderIcon()}
        <div className="c-research-topic__title">
          {topic.title}
        </div>
      </a>
    );
  }
}
