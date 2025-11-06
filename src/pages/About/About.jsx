import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';
import gallery1 from '../../assets/FA1.jpg';
import gallery2 from '../../assets/FA2.jpg';
import gallery3 from '../../assets/US1.jpg';
import texts from '../../content/textualContent';
import Headline from '../../components/Headline/Headline';

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

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.about}>
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

      <p className={styles.aboutText}>
        We are a team of local and international women who call Croatia home, united by a shared
        love of bringing people together. Each of us brings unique perspectives, ideas, and cultural
        influences — creating events that feel both deeply personal and beautifully distinctive. Our
        founder, Nikki, has travelled the world many times, experiencing the richness of different
        cultures and traditions. This global journey shapes every detail we create — from the way we
        style a table, to the music that plays in the background, to the little touches guests
        remember long after the event ends. With years of hands-on experience planning events of all
        kinds, we’ve honed a special niche: small, intimate gatherings. We believe there’s magic in
        these moments — where conversations flow easily, every guest feels seen, and the atmosphere
        feels effortless yet unforgettable.
      </p>

      <p className={styles.aboutText}>
        Coming from varied cultural and religious backgrounds, our team is uniquely equipped to
        design weddings and celebrations that honour your traditions — whether that’s a vibrant
        Indian ceremony, a classic Christian wedding, a Jewish chuppah, or any cultural fusion
        that reflects who you are. We understand the importance of symbolism, rituals, and heritage,
        and bring them to life with authenticity and beauty. Whether it’s a private dinner under the
        stars, a milestone celebration with your closest friends, or a meaningful cultural wedding,
        we focus on crafting experiences that are thoughtful, personal, and perfectly tailored to you.
      </p>

      <p className={styles.aboutText}>
        Our philosophy is simple: <strong>You dream it, we create it — beautifully, seamlessly,
          and with heart.</strong>
      </p>

      <Headline
        headline={texts.inquireHeadline.headline}
        description={texts.inquireHeadline.description}
      />
    </div>
  );
};

export default About;