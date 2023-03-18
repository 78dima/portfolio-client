import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import SkillItem from '@/components/Skills/SkillItem/SkillItem';

import image from './assets/html5-svgrepo-com.svg';
import styles from './Skills.module.scss';

enum Filters {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
  OTHER = 'other',
  DATABASE = 'database',
  ALL = 'all',
}

interface Data {
  id: number;
  title: string;
  descr: string;
  imageSrc: string;
  filters: string[];
}

const dataa = [
  {
    id: 1,
    title: 'HTML5',
    descr:
      'I am well versed in layout, I am able to quickly and efficiently compose the skeleton of a site, I try very hard to keep the code clean and comfortable, to separate everything by components',
    imageSrc: image.src,
    filters: ['html'],
  },
  {
    id: 2,
    title: 'CSS3',
    descr:
      'I am good at writing styles for the site, I can quite easily identify problem areas and find a solution. I try to follow the BEM methodology where necessary and possible. Css, Scss, Sass, Less',
    imageSrc: '/icons8-css3.svg',
    filters: ['css'],
  },
  {
    id: 3,
    title: 'JavaScript',
    descr: 'I love this language. I use it in my work. VanillaJS forever',
    imageSrc: '/icons8-javascript.svg',
    filters: ['js'],
  },
  {
    id: 4,
    title: 'React',
    descr: 'It is my main framework for work. Wrote many projects on it',
    imageSrc: '/icons8-react.svg',
    filters: ['js'],
  },
  {
    id: 5,
    title: 'Redux + Saga',
    descr: 'The missing link for working with react. Nice work with storage and side effects',
    imageSrc: '/redux.svg',
    filters: ['js'],
  },
  {
    id: 6,
    title: 'Typescript',
    descr: 'A good and convenient tool for code typing, as well as for teamwork. Its good when there is code typing',
    imageSrc: '/typescript.svg',
    filters: ['js'],
  },
  {
    id: 7,
    title: 'Next.js',
    descr: 'At work, I got acquainted with this library, and also began to use it in my new projects. Good set for SEO',
    imageSrc: '/nextjs.svg',
    filters: ['js'],
  },
  {
    id: 8,
    title: 'Jest',
    descr: 'A good framework for component testing, good with react-testing-library. I used in big projects',
    imageSrc: '/jest.svg',
    filters: ['js'],
  },
  {
    id: 9,
    title: 'Webpack, Gulp',
    descr: 'I have experience with these technologies. I have my build along with gulp',
    imageSrc: '/webpack.svg',
    filters: ['js'],
  },
  {
    id: 10,
    title: 'Node.js + Express',
    descr: 'Most often I write my pet projects using Node.js + Express. Good and comfortable base',
    imageSrc: '/nodejs.svg',
    filters: ['js'],
  },
  {
    id: 11,
    title: 'Nest.js',
    descr: 'I got acquainted with the framework recently, a good and convenient tool for a large project',
    imageSrc: '/nestjs.svg',
    filters: ['js'],
  },
  {
    id: 12,
    title: 'PostgreSQL',
    descr: 'Had little experience. Happy to work with it. good for big projects',
    imageSrc: '/postgresql.svg',
    filters: ['database'],
  },
  {
    id: 13,
    title: 'MongoDB',
    descr: 'I had experience with this database (through the mongoose library), I really liked it',
    imageSrc: '/mongo.svg',
    filters: ['database'],
  },
  {
    id: 14,
    title: 'Git',
    descr:
      'I have a good command of commands, I work both in the console and through the programming environment (I use webstorm). I personally use github. At work - gitlab.',
    imageSrc: '/git.svg',
    filters: ['other'],
  },
  {
    id: 15,
    title: 'Docker',
    descr:
      'Recently I began to get acquainted with this technology, the principles are clear, but I still have to practice.',
    imageSrc: '/docker.svg',
    filters: ['other'],
  },
  {
    id: 16,
    title: 'Jira',
    descr:
      'A working tool, I know how to set up and write filters, I am well versed in the program. From the point of view of an escort employee, it is an indispensable tool, especially if all processes are set up correctly.',
    imageSrc: '/jira.svg',
    filters: ['other'],
  },
  {
    id: 17,
    title: 'Google',
    descr:
      'I have a perfect command of the search mechanism, 10 times googling, 1 time ask colleagues. For questions, I always first of all climb into google, actively use all the possibilities of the global Internet. The best solution can be written in 3 days, or found in 3 minutes :)',
    imageSrc: '/google.svg',
    filters: ['other'],
  },
];

const filters = [
  { id: 1, name: 'all' },
  { id: 2, name: 'html' },
  { id: 3, name: 'css' },
  { id: 4, name: 'js' },
  { id: 5, name: 'database' },
  { id: 6, name: 'other' },
];

const Skills = () => {
  const [data, setData] = useState<Data[]>(dataa);
  const [activeFilter, setActiveFilter] = useState<Filters>();

  const onFilterHandler = (filterName) => {
    setActiveFilter(filterName);
    const filteredData = dataa.filter((i) => i.filters.includes(filterName));
    if (filterName === Filters.ALL) {
      setData(dataa);
    } else {
      setData(filteredData);
    }
  };

  useEffect(() => {
    setActiveFilter(Filters.ALL);
  }, []);
  return (
    <div className={styles.skills}>
      <div className={styles.skillsTabs}>
        {filters.map((i) => (
          <button
            type="button"
            onClick={() => onFilterHandler(i.name)}
            key={i.id}
            role="tab"
            className={clsx(styles.myWorkTabsItem, activeFilter === i.name && styles.active)}
          >
            {i.name}
          </button>
        ))}
      </div>
      <div className={styles.skillsRow}>
        {data.map((i) => (
          <SkillItem key={i.id} title={i.title} descr={i.descr} imageSrc={i.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
