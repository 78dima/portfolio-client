import React from 'react';

import styles from './PostItem.module.scss';

interface Props {
  title: string;
  text: string;
  site: string;
  years: string;
  imageSrc: string;
}

const PostItem: React.FC<Props> = ({ title, text, imageSrc, site, years }) => (
  <div className={styles.postItem}>
    <div className={styles.postImageWrapper}>
      <img src={imageSrc} alt="" />
    </div>
    <div className={styles.postContentWrapper}>
      <h4 className={styles.postContentTitle}>{title}</h4>
      <div className={styles.postContentSite}>
        <a href={site}>{site}</a>
      </div>
      <div className={styles.postContentYears}>{years}</div>
      <div className={styles.postContentText}>{text}</div>
    </div>
  </div>
);

export default PostItem;
