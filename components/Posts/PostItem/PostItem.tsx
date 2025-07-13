import React from 'react';
import uuid from 'react-uuid';

import styles from './PostItem.module.scss';

interface Props {
  title: string;
  text: string;
  site: string;
  years: string;
  stacking: Array<string>;
}

const PostItem: React.FC<Props> = ({ title, text, site, years, stacking }) => (
  <div className={styles.postItem}>
    <div className={styles.postDate}>{years}</div>
    <div className={styles.postContentWrapper}>
      <h4 className={styles.postContentTitle}>{title}</h4>
      <div className={styles.postContentSite}>
        <a href={site}>{site}</a>
      </div>
      <div className={styles.postContentText} dangerouslySetInnerHTML={{ __html: text }} />
      <div className={styles.postSkills}>
        {stacking.map((item) => (
          <div key={uuid()} className={styles.postSkillsItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PostItem;
