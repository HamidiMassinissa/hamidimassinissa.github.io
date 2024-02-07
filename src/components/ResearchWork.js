import classnames from 'classnames';
import React, { Component } from 'react'

export default class ResearchWork extends Component {
  handleLinkClick = eventLabel => {
  }

  renderTopicTagsItem() {
    const {
      work,
      topicMap,
    } = this.props;
    if (!topicMap) {
      return null;
    }

    const topicIds = work.topics || [];
    const topics = topicIds
      .filter(tid => tid in topicMap)
      .map(tid => topicMap[tid]);
    const topicTags = topics.map(topic => (
      <div
        key={topic.id}
        className="c-research-work__tag"
        style={topic.color ? { backgroundColor: topic.color } : {}}
      >
        {topic.tag}
      </div>
    ));
    return (
      <div className="c-research-work__tags">
        {topicTags}
      </div>
    );
  }

  render() {
    const { 
      work, 
      isLinkVisible, 
    } = this.props;
    const links = work.links || {};
    const linkItems = isLinkVisible ? Object.keys(links).map((key, i) => (
      <a
        key={key}
        href={links[key]}
        className="u-links__link u-links__active"
        target="_blank"
        onClick={() => this.handleLinkClick(`${work.title}::${key}`)}
      >
        {key}
      </a>
    )) : null;

    

    const titleItem = work.title ? (
      <div
        className={classnames(
          'c-research-work__title',
          'c-research-work__item'
        )}
      >
        {work.title} {this.renderTopicTagsItem()}
      </div>
    ) : null;

    const authorsItem = work.authors ? (
      <div
        className={classnames(
          'c-research-work__authors',
          'c-research-work__item'
        )}
      >
        {work.authors}
      </div>
    ) : null;

    const booktitleItem = work.booktitle ? (
      <div
        className={classnames(
          'c-research-work__booktitle',
          'c-research-work__item'
        )}
      >
        {work.booktitle}
      </div>
    ) : null;

    return (
      <div className="c-research-work">
        {titleItem}
        {authorsItem}
        {booktitleItem}
        <div className="u-links">
          {linkItems}
        </div>
      </div>
    );
  }
}
