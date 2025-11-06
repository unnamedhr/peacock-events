import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import gallery1 from '../../assets/FA1.jpg';
import gallery2 from '../../assets/FA2.jpg';
import gallery3 from '../../assets/US1.jpg';
import Headline from '../../components/Headline/Headline';
import ColumnHero from '../../components/ColumnHero/ColumnHero';
import texts from '../../content/textualContent';

import expertiseImage from '../../assets/Table1.jpg';
import socialEventImage from '../../assets/SocialEvents.jpg';
import corporateEventImage from '../../assets/CorporateEvent.jpg';
import communityImage from '../../assets/CharityEvent.jpg';
import destinationImage from '../../assets/DestinationEvent.jpg';

const images = [
  gallery1,
  gallery2,
  gallery3
];

const slideTexts = [
  "Fairytale Luxury Weddings",
  "Unforgettable Moments",
  "Exclusive Tailor Made Experiences"
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img src={images[current]} alt="" className={styles.heroImage} />
        <div className={styles.overlay}>
          <h1 className={styles.slideHeadline}>{slideTexts[current]}</h1>
        </div>
      </div>

      <Headline
        headline={texts.mainHeadline.headline}
        description={texts.mainHeadline.description}
      />

      <ColumnHero
        image={expertiseImage}
        headline={texts.weddingService.headline}
        description={texts.weddingService.description}
        align="right"
        alt="Peacock Events Expertise"
      />

      <ColumnHero
        image={socialEventImage}
        headline={texts.socialEventsService.headline}
        description={texts.socialEventsService.description}
        align="left"
        alt="Peacock Events Expertise"
      />

      <ColumnHero
        image={corporateEventImage}
        headline={texts.corporateEventsService.headline}
        description={texts.corporateEventsService.description}
        align="right"
        alt="Peacock Events Expertise"
      />

      <ColumnHero
        image={communityImage}
        headline={texts.communityService.headline}
        description={texts.communityService.description}
        align="left"
        alt="Peacock Events Expertise"
      />

      <ColumnHero
        image={destinationImage}
        headline={texts.destinationService.headline}
        description={texts.destinationService.description}
        align="right"
        alt="Peacock Events Expertise"
      />

      <Headline
        headline={texts.inquireHeadline.headline}
        description={texts.inquireHeadline.description}
      />

    </div>
  );
};

export default Home;