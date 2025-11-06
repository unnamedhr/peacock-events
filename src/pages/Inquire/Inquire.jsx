import React, { useState, useEffect } from 'react';
import styles from './Inquire.module.scss';
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

const Inquire = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    date: '',
    type: '',
    location: '',
    note: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, telephone, date, type, location, note } = formData;

    const subject = encodeURIComponent(`New Event Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}
      Email: ${email}
      Telephone: ${telephone}
      Date of Event: ${date}
      Type of Event: ${type}
      Location: ${location}
      Note: ${note}`
    );

    window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
  };


  return (
    <div className={styles.inquire}>
      <div className={styles.hero}>
        <img src={images[current]} alt="" className={styles.heroImage} />
        <div className={styles.overlay}>
          <h1 className={styles.slideHeadline}>{slideTexts[current]}</h1>
        </div>
      </div>

      <Headline
        headline={texts.contactHeadline.headline}
        description={texts.contactHeadline.description}
      />

      <div className={styles.formSection}>
        <Headline text="Inquire Now" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Name<span>*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email<span>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Telephone<span>*</span></label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Enter your telephone number"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Date of Event<span>*</span></label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Type of Event<span>*</span></label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Wedding"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Location<span>*</span></label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the location of your event"
                required
              />
            </div>
          </div>

          <div className={styles.textAreaGroup}>
            <label>Leave a note<span>*</span></label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Please share your vision with us"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Inquire;