import classnames from 'classnames';
import React, { Component } from 'react'

export default class ResearchTopic extends Component {
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

  renderTag() {
      const {
          topic,
          hidden
      } = this.props;
      return (
        <div className="c-research-work__tags">
            <div
              key={topic.id}
              className="c-research-work__tag"
              style={topic.color ? { backgroundColor: topic.color } : {}}
            >
              {topic.tag}
            </div>
        </div>
      )
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
        {this.renderTag()}
      </a>
    );
  }
}
