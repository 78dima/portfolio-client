import React from 'react';

import PostItem from '@/components/Posts/PostItem/PostItem';

import styles from './Posts.module.scss';

type PostData = {
  id: number;
  title: string;
  text: string;
  site: string;
  years: string;
  stacking: Array<string>;
};

const Posts = () => {
  const data: Array<PostData> = [
    {
      id: 1,
      title: 'WebBooster. Moscow',
      years: '2016 - 2019',
      site: 'https://wbooster.ru/',
      text: 'Frontend Developer - Website development, implementation of functionality. Interaction with managers, designer and customer.',
      stacking: ['HTML', 'CSS', 'JavaScript', 'PHP', 'JQuery', 'SASS', 'Gulp'],
    },
    {
      id: 2,
      title: 'ImagineWeb. Moscow',
      years: '2019 - 2020',
      site: 'https://imagineweb.ru/',
      text: 'Frontend Developer Development of applications and websites of partners.',
      stacking: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP(Bitrix)',
        'JQuery',
        'SASS',
        'Gulp',
        'React',
        'Redux',
        'Saga',
        'Thunk',
        'Jest',
        'react-testing-library',
        'Vue 2',
      ],
    },
    {
      id: 3,
      title: 'Kelly Services. Moscow',
      years: '2020 - 2021',
      site: 'https://kellyservices.ru/',
      text: 'Frontend Developer. Development on the M.Video-Eldorado project and partners. SPA - application',
      stacking: [
        'HTML',
        'CSS',
        'JavaScript',
        'SASS',
        'WebPack',
        'TypeScript',
        'React',
        'Redux',
        'Saga',
        'Thunk',
        'Next.js',
        'Jest',
        'react-testing-library',
        'GitLab',
        'Jira',
        'Agile',
      ],
    },
    {
      id: 4,
      title: 'M.Video-Eldorado. Moscow',
      years: '2021 - 2022',
      site: 'https://mvideo.ru/',
      text: 'Frontend Developer. Development on the M.Video-Eldorado project.',
      stacking: [
        'HTML',
        'CSS',
        'JavaScript',
        'SASS',
        'WebPack',
        'TypeScript',
        'React',
        'Redux',
        'Saga',
        'Thunk',
        'Next.js',
        'Jest',
        'react-testing-library',
        'GitLab',
        'Jira',
        'Agile',
      ],
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
          stacking={item.stacking}
        />
      ))}
    </div>
  );
};

export default Posts;
