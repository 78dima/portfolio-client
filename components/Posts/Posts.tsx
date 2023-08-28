'use client';

import React from 'react';

import Loading from '@/components/common/Loading/Loading';
import PostItem from '@/components/Posts/PostItem/PostItem';
import { postAPI } from '@/modules/posts/service';

import styles from './Posts.module.scss';

const Posts = () => {
  const { data, isLoading = [] } = postAPI.useFetchAllPostsQuery(null);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.posts}>
      {data &&
        data.map((item) => (
          <PostItem
            key={item.id}
            years={item.years}
            site={item.site}
            title={item.title}
            text={item.text}
            stacking={item.stacking}
          />
        ))}
    </div>
  );
};

export default Posts;
