import React from 'react';

import MyWork from '@/components/MyWork/MyWork';
import Posts from '@/components/Posts/Posts';
import SectionInfo from '@/components/SectionInfo/SectionInfo';
import SectionLayout from '@/components/SectionLayout/SectionLayout';
import Skills from '@/components/Skills/Skills';

import ContactMe from '../../ContactMe/ContactMe';
import styles from './MainPageContent.module.scss';

const MainPageContent: React.FC = () => (
  <div className={styles.mainPageWrapper}>
    <div className={styles.mainPageContainer}>
      <SectionLayout>
        <SectionInfo
          title="About Me"
          descr="Hello! My name is Dumitru Romanenco. I'm a web developer, let's get acquainted! My work experience:"
        />
        <Posts />
      </SectionLayout>
      <SectionLayout>
        <SectionInfo
          title="What I’m good at?"
          descr="Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor. Vestibulum congue leo et tellus aliquam, eu viverra nulla semper. Nullam eu faucibus diam. Donec eget massa ante."
        />
        <Skills />
      </SectionLayout>
      <SectionLayout>
        <SectionInfo
          title="My Work"
          descr="Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit amet. Duis ac elit vulputate, lobortis arcu quis, vehicula mauris."
        />
        <MyWork />
      </SectionLayout>
      <SectionLayout>
        <SectionInfo
          title="Contact Me"
          descr="Fusce eget nibh nec justo interdum condimentum. Morbi justo ex, efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ContactMe />
      </SectionLayout>
    </div>
  </div>
);
export default MainPageContent;
