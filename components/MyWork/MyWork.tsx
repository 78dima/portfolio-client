'use client';

import React, { useMemo, useState } from 'react';

import Loading from '@/components/common/Loading/Loading';
import MyWorkItem from '@/components/MyWork/MyWorkItem/MyWorkItem';
import { myWorksAPI } from '@/modules/myWorks/service';

import Button from '../common/Button/Button';
import styles from './MyWork.module.scss';

const MyWork = () => {
  const { data, isLoading } = myWorksAPI.useFetchAllWorksQuery(null);
  const [showData, setShowData] = useState(false);
  const onShowEvent = () => {
    setShowData(true);
  };
  const dispayedItems = useMemo(() => {
    if (!data) {
      return [];
    }

    return showData ? data : data.slice(0, 6);
  }, [data, showData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles.myWorkRow}>
        {data &&
          dispayedItems.map((i) => <MyWorkItem key={i.id} title={i.title} link={i.link} imageSrc={i.imageSrc} />)}
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
