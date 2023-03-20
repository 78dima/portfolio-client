import React, { useState } from 'react';

import MyWorkItem from '@/components/MyWork/MyWorkItem/MyWorkItem';

import Button from '../common/Button/Button';
import styles from './MyWork.module.scss';

interface IMyWorksData {
  id: number;
  title: string;
  link: string;
  imageSrc: string;
}

const data: IMyWorksData[] = [
  {
    id: 1,
    title: 'Eldorado',
    link: 'https://eldorado.ru',
    imageSrc: '/eldoradoru.jpeg',
  },
  {
    id: 2,
    title: 'M.Video',
    link: 'https://mvideo.ru',
    imageSrc: '/mvideo.jpeg',
  },
  {
    id: 3,
    title: 'Knauf',
    link: 'https://knauf.ru',
    imageSrc: '/knauf.jpeg',
  },
  {
    id: 4,
    title: 'TeploKnauf',
    link: 'https://teploknauf.com',
    imageSrc: '/teploknauf.jpeg',
  },
  {
    id: 5,
    title: 'WebBooster',
    link: 'https://wbooster.ru',
    imageSrc: '/wbooster.jpeg',
  },
  {
    id: 6,
    title: 'WebBooster Quiz',
    link: 'https://lk-wb.dev-wbooster.ru/lk-wb-quiz/quizz-wb',
    imageSrc: '/wboosterquiz.png',
  },
  {
    id: 7,
    title: 'Lk WebBooster',
    link: 'https://lk-wb.dev-wbooster.ru ',
    imageSrc: '/lkwbooster.jpeg',
  },
  {
    id: 8,
    title: 'L2W WebBooster',
    link: 'https://l2w.dev-wbooster.ru',
    imageSrc: '/l2w.jpeg',
  },
  {
    id: 9,
    title: 'Samson pharma',
    link: 'https://samson-pharma.ru',
    imageSrc: '/samson.jpeg',
  },
  {
    id: 10,
    title: 'Ozerki',
    link: 'https://ozerki.ru',
    imageSrc: '/ozerki.jpeg',
  },
  {
    id: 11,
    title: 'Altdekor',
    link: 'https://altdekor.ru',
    imageSrc: '/altdekor.jpeg',
  },
  {
    id: 12,
    title: 'Grundfos',
    link: 'https://grundfos.dev-wbooster.ru',
    imageSrc: '/grundfos.jpeg',
  },
  {
    id: 13,
    title: 'Armani roca',
    link: 'https://bathpoint.armaniroca.ru',
    imageSrc: '/armaniroca.jpeg',
  },
  {
    id: 14,
    title: 'Estetic-fs',
    link: 'https://estetic-fs.ru',
    imageSrc: '/elastic.jpeg',
  },
];

const MyWork = () => {
  const [showData, setShowData] = useState(false);
  const visibleItems = showData ? data : data.slice(0, 6);
  const onShowEvent = () => {
    setShowData(true);
  };
  return (
    <>
      <div className={styles.myWorkRow}>
        {visibleItems.map((i) => (
          <MyWorkItem key={i.id} title={i.title} link={i.link} imageSrc={i.imageSrc} />
        ))}
      </div>
      {!showData && (
        <div className={styles.buttonWrapper}>
          <Button type="button" onClick={onShowEvent}>
            Show more
          </Button>
        </div>
      )}
    </>
  );
};

export default MyWork;
