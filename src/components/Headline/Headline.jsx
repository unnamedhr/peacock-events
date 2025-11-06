import React from 'react';
import styles from './Headline.module.scss';

const Headline = ({ headline, description }) => (
  <div className={styles.headlineSection}>
    <h2 className={styles.headline}>{headline}</h2>
    <div className={styles.text}>{description}</div>
  </div>
);

export default Headline;
