import clsx from 'clsx';
import React from 'react';

import styles from './ContactMe.module.scss';

const ContactMe = () => (
  <div>
    <form action="post" className={styles.form}>
      <div className={styles.formRow}>
        <div className={clsx(styles.formCol, styles.formCol6)}>
          <fieldset>
            <input type="text" name="name" id="name" placeholder="Your name..." className={styles.formInput} required />
          </fieldset>
        </div>
        <div className={clsx(styles.formCol, styles.formCol6)}>
          <fieldset>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email..."
              className={styles.formInput}
              required
            />
          </fieldset>
        </div>
        <div className={styles.formCol}>
          <fieldset>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject..."
              className={styles.formInput}
              required
            />
          </fieldset>
        </div>
        <div className={styles.formCol}>
          <fieldset>
            <textarea name="message" rows={4} id="message" placeholder="Your message..." required />
          </fieldset>
        </div>
        <div className={styles.formButtonWrapper}>
          <fieldset>
            <button type="submit" id="form-submit" className={styles.formButton}>
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
);

export default ContactMe;
