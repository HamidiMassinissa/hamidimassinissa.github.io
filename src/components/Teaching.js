import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataLoader from './DataLoader';
import TeachingTopic from './TeachingTopic';
import TeachingWork from './TeachingWork';

const DATA_URL = 'data/teachings.json';

class Teaching extends Component {
  state = {
    hiddenTopicIds: [],
    topicMap: {},
  };

  componentDidMount() {
    this.updateTopicMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.updateTopicMap();
    }
  }

  updateTopicMap() {
    const { data } = this.props;
    const topics = data.topics || [];
    const topicMap = {};
    topics.forEach(topic => {
      topicMap[topic.id] = topic;
    });
    this.setState({ topicMap });
  }

  showTopic = topicId => {
    const { hiddenTopicIds } = this.state;
    if (hiddenTopicIds.includes(topicId)) {
      this.setState({ 
        hiddenTopicIds: hiddenTopicIds.filter(t => t !== topicId),
      });
    }
  };

  hideTopic = topicId => {
    const { hiddenTopicIds } = this.state;
    if (!hiddenTopicIds.includes(topicId)) {
      this.setState({
        hiddenTopicIds: [...hiddenTopicIds, topicId],
      });
    }
  }

  renderLocations() {
    const { data } = this.props;
    const { hiddenTopicIds } = this.state;
    const topics = data.topics.map(topic => (
      <TeachingTopic
        key={topic.id}
        topic={topic}
        hidden={hiddenTopicIds.includes(topic.id)}
        showTopic={() => this.showTopic(topic.id)}
        hideTopic={() => this.hideTopic(topic.id)}
      />
    ));
    return (
      <div className="c-research__category">
        <div className="c-research__category-title">
          Categories
        </div>
        <div className="c-research__work-list">
          {topics}
        </div>
      </div>
    );
  }

  isWorkVisible(work) {
    const { hiddenTopicIds } = this.state;
    if (work.topics) {
      return work.topics.filter(topic => (
        !hiddenTopicIds.includes(topic)
      )).length > 0;
    } else {
      return true;
    }
  }

  renderCategory(category, i) {
    const { topicMap } = this.state;
    const researches = category.researches.filter(work => this.isWorkVisible(work));
    const workItems = researches.map((work, i) => (
      <TeachingWork
        key={i}
        work={work}
        topicMap={topicMap}
        isLinkVisible={true}
      />
    ));
    return (
      <div
        key={i}
        className="c-teaching__category"
      >
        <div className="c-teaching__category-title">
          {category.title}
        </div>
        <div className="c-teaching__work-list">
          {workItems}
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const categoryItems = data.categories.map((category, i) => this.renderCategory(category, i));
    return (
      <div className="c-teaching">
        {this.renderLocations()}
        {categoryItems}
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Teaching {...props} />
    </DataLoader>
  );
};
