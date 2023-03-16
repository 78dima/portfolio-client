import React from 'react';

import leftImage from '@/components/Posts/assets/left-image.jpg';
import PostItem from '@/components/Posts/PostItem/PostItem';

import styles from './Posts.module.scss';

type PostData = {
  id: number;
  title: string;
  text: string;
  site: string;
  years: string;
  imageSrc: string;
};

const Posts = () => {
  const data: Array<PostData> = [
    {
      id: 1,
      title: 'WebBooster. Moscow',
      years: '2016-2019',
      site: 'https://wbooster.ru/',
      text: 'Frontend Developer - Website development, implementation of functionality. Interaction with managers, designer and customer. Stacking: HTML, CSS, JavaScript, PHP, JQuery, SASS, gulp.',
      imageSrc: leftImage.src,
    },
    {
      id: 2,
      title: 'ImagineWeb. Moscow',
      years: '2019-2020',
      site: 'https://imagineweb.ru/',
      text: 'Frontend Developer Development of applications and websites of partners. PHP(Bitrix), Javascript, Jquery, React, Redux, Saga, Thunk, Jest, react-testing-library, Vue 2',
      imageSrc: leftImage.src,
    },
    {
      id: 3,
      title: 'Kelly Services. Moscow',
      years: '2020-2021',
      site: 'https://kellyservices.ru/',
      text: 'Frontend Developer. Development on the M.Video-Eldorado project and partners. SPA - application for: React, Redux, Redux-Saga, TypeScript, Nextjs and other development dependencies. Unit testing jest, react-testing-library. gitlab, jira, agile',
      imageSrc: leftImage.src,
    },
    {
      id: 4,
      title: 'M.Video-Eldorado. Moscow',
      years: '2021-2022',
      site: 'https://mvideo.ru/',
      text: 'Frontend Developer. Development on the M.Video-Eldorado project. SPA - application for: React, Redux, Redux-Saga, TypeScript, Nextjs and other development dependencies. Unit testing jest, react-testing-library. gitlab, jira, agile',
      imageSrc: leftImage.src,
    },
  ];

  return (
    <div className={styles.posts}>
      {data.map((item) => (
        <PostItem
          key={item.id}
          years={item.years}
          site={item.site}
          title={item.title}
          text={item.text}
          imageSrc={item.imageSrc}
        />
      ))}
    </div>
  );
};

export default Posts;
