import React from 'react';

import MyWorkItem from '@/components/MyWork/MyWorkItem/MyWorkItem';

import image from './assets/portfolio-01.jpg';
import styles from './MyWork.module.scss';

interface IMyWorksData {
  id: number;
  title: string;
  descr: string;
  imageSrc: string;
  filter?: string[];
}

const MyWork = () => {
  const data: IMyWorksData[] = [
    { id: 1, title: 'First Title', descr: 'free to use our template', imageSrc: image.src, filter: ['html'] },
    { id: 2, title: 'First Title', descr: 'free to use our template', imageSrc: image.src, filter: ['css'] },
    { id: 3, title: 'First Title', descr: 'free to use our template', imageSrc: image.src, filter: ['css'] },
    { id: 4, title: 'First Title', descr: 'free to use our template', imageSrc: image.src, filter: ['js'] },
  ];
  return (
    <div className={styles.myWorkRow}>
      {data.map((i) => (
        <MyWorkItem key={i.id} title={i.title} descr={i.descr} imageSrc={i.imageSrc} />
      ))}
    </div>
  );
};

export default MyWork;
