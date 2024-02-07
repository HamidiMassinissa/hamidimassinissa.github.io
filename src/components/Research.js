import classnames from 'classnames';
import React, { Component } from 'react'
import DataLoader from './DataLoader';
import ResearchTopic from './ResearchTopic';
import ResearchWork from './ResearchWork';

//const DATA_URL = '/public/data/researches.json';
const DATA_URL = 'data/researches.json';

class Research extends Component {
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

  renderTopics() {
    const { data } = this.props;
    const { hiddenTopicIds } = this.state;
    const topics = data.topics.map(topic => (
      <ResearchTopic
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
          Topics
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
      <ResearchWork
        key={i}
        work={work}
        topicMap={topicMap}
        isLinkVisible={true}
      />
    ));
    return (
      <div
        key={i}
        className="c-research__category"
      >
        <div className="c-research__category-title">
          {category.title}
        </div>
        <div className="c-research__work-list">
          {workItems}
        </div>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    const categoryItems = data.categories.map((category, i) => this.renderCategory(category, i));
    return (
      <div className="c-research">
        {this.renderTopics()}
        {categoryItems}
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Research {...props} />
    </DataLoader>
  );
};
