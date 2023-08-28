'use client';

import clsx from 'clsx';
import React, { useCallback, useMemo, useState } from 'react';

import Loading from '@/components/common/Loading/Loading';
import SkillItem from '@/components/Skills/SkillItem/SkillItem';
import { skillsAPI } from '@/modules/skills/service';

import styles from './Skills.module.scss';

enum Filters {
  HTML = 'html',
  CSS = 'css',
  JS = 'js',
  OTHER = 'other',
  DATABASE = 'database',
  ALL = 'all',
}

const filters = [
  { id: 1, name: 'all' },
  { id: 2, name: 'html' },
  { id: 3, name: 'css' },
  { id: 4, name: 'js' },
  { id: 5, name: 'database' },
  { id: 6, name: 'other' },
];

const Skills = () => {
  const { data, isSuccess, isLoading } = skillsAPI.useFetchAllSkillsQuery(null);
  const [activeFilter, setActiveFilter] = useState<Filters>(Filters.ALL);
  const incrementDisplayCount = 6;
  const initiallyDisplayedCount = 6;
  const [displayCount, setDisplayCount] = useState<number>(initiallyDisplayedCount);

  const displayedItems = useMemo(() => {
    if (!data) {
      return [];
    }

    const filteredItems =
      activeFilter === Filters.ALL ? data : data.filter((item) => item.filters.includes(activeFilter));

    return filteredItems.slice(0, displayCount);
  }, [data, activeFilter, displayCount]);

  const showData = useMemo(() => {
    if (!data) {
      return false;
    }

    const filteredItems =
      activeFilter === Filters.ALL ? data : data.filter((item) => item.filters.includes(activeFilter));

    return displayCount <= filteredItems.length;
  }, [data, activeFilter, displayCount]);

  const onFilterHandler = useCallback(
    (filterName) => {
      setActiveFilter(filterName);
      setDisplayCount(displayCount);
    },
    [displayCount],
  );

  const onShowEvent = useCallback(() => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + incrementDisplayCount);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
        {isSuccess &&
          displayedItems.map((i) => (
            <SkillItem key={i.id} title={i.title} description={i.description} image={i.image} />
          ))}
      </div>
      {showData && (
        <div className={styles.buttonWrapper}>
          <button type="button" onClick={onShowEvent}>
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Skills;
