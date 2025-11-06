import React from 'react';
import styles from './ColumnHero.module.scss';

const ColumnHero = ({ image, headline, description, align = 'right', alt = '' }) => {
  const isLeft = align === 'left';

  return (
    <div className={styles.expertiseSection}>
      {isLeft ? (
        <>
          <div className={styles.imageColumn}>
            <img src={image} alt={alt} className={styles.expertiseImage} />
          </div>
          <div className={styles.textColumn}>
            <h2 className={styles.headline}>{headline}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.textColumn}>
            <h2 className={styles.headline}>{headline}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.imageColumn}>
            <img src={image} alt={alt} className={styles.expertiseImage} />
          </div>
        </>
      )}
    </div>
  );
};

export default ColumnHero;