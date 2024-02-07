import React, { Component } from 'react'
import DataLoader from './DataLoader'
import ResearchWork from './ResearchWork';
import { Link } from 'react-router-dom';

//const DATA_URL = '/public/data/researches.json';
const DATA_URL = 'data/researches.json';
const MAX_PUBLICATION_COUNT = 5;

const PREFIX_URL='/~hamidi';

class Home extends Component {
  getLatestPublications() {
    const { data } = this.props;
    const works = data.categories.filter(category => category.title.startsWith('20'))[0].researches;
    return works.length > MAX_PUBLICATION_COUNT ? works.slice(0, MAX_PUBLICATION_COUNT) : works;
  }

  render() {
    const publicationItems = this.getLatestPublications().map((work, i) => (
      <ResearchWork
        key={i}
        work={work}
      />
    ));

    const teachingItems = publicationItems;

    return (
      <div className="c-home">


        <div className="c-home__main">
            <div className="c-home__main-image-container">
              <img
                className="c-home__main-image"
                src="images/massinissaHamidi.jpg"
                alt="Massinissa HAMIDI"
              />
            </div>
            <div className="c-home__contact-information">
                <h1>Massinissa Hamidi</h1>
                <p></p>
                <div>Assistant Professor (Maître de Conférences)</div>
                <div>Laboratoire IBISC</div>
                <div>Université d'Évry Paris-Saclay</div>
                <div>Email: massinissa (dot) hamidi [at] univ-evry (dot) fr</div>
                <p>
                    <span>
                        <a href="https://scholar.google.com/citations?user=2P3bt_YAAAAJ&hl=en">Google Scholar</a>
                    </span>
                &nbsp;/&nbsp;
                    <span>
                        <a href="https://dblp.uni-trier.de/pid/220/7317.html">DBLP</a>
                    </span>
                &nbsp;/&nbsp;
                    <span>
                        <a href="https://roboticsmind.github.io/">RoboticsMind</a>
                    </span>
                </p>
            </div>
            <div className="c-home__research-topics">
                <h1>Research topics</h1>
                <p></p>
                <ul>
                    <li>Learning in the Internet of Things</li>
                    <li>Meta modeling/learning</li>
                    <li>Domain knowledge incorporation</li>
                    <li>Dynamical systems</li>
                    <li>Industry 4.0; eHealth</li>
                    <li>Human Activity Recognition</li>
                </ul>
            </div>
        </div>



        <div className="c-home__teaching-title">
            Teaching
        </div>
        <div className="c-home__teaching">
            <p></p>
            <div>- Internet of Things, with Aomar Osmani</div>
            <div className="c-teaching-work__tags">
                <div className="c-teaching-work__tag">Institut Galilée</div>
                <div className="c-teaching-work__tag">Efrei</div>
                <div className="c-teaching-work__tag">Licence 3</div>
                <div className="c-teaching-work__tag">Master 1</div>
            </div>
            <div>- Machine learning and Deep learning, with Pegah Alizadeh and Aomar Osmani</div>
            <div className="c-teaching-work__tags">
                <div className="c-teaching-work__tag">ESiLV</div>
                <div className="c-teaching-work__tag">Master 1</div>
            </div>
            <div>- Artificial intelligence in Industry, with Aomar Osmani</div>
            <div className="c-teaching-work__tags">
                <div className="c-teaching-work__tag">ESiLV</div>
                <div className="c-teaching-work__tag">Master 1</div>
            </div>
            <div>- Machine learning and Internet of Things, with Aomar Osmani</div>
            <div className="c-teaching-work__tags">
                <div className="c-teaching-work__tag">Institut Galilée</div>
                <div className="c-teaching-work__tag">Master 2</div>
            </div>
            <p></p>
        </div>
        <div className="u-links">
          <Link
            className="u-links__link u-links__active"
            to="/teaching"
          >
            See More
          </Link>
        </div>



        <div className="c-home__publications-title">
          Latest publications
        </div>
        <div className="c-home__publications">
          {publicationItems}
        </div>
        <div className="u-links">
          <Link
            className="u-links__link u-links__active"
            to="/research"
          >
            See More
          </Link>
        </div>



      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Home {...props} />
    </DataLoader>
  );
};
