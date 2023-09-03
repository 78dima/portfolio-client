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
      <SectionLayout id="about">
        <SectionInfo
          title="About Me"
          descr="Hello! My name is Dumitru Romanenco. I'm a web developer, let's get acquainted! As a front-end developer with 6 years of experience, I have a proven track record of creating beautiful, responsive, and user-friendly websites that engage users and drive business results. I love programming and my key strength is ability to rapidly learn anything that required to get the job done. I can work on any OS using any IDE or text editor. When I have task the only question is time. My experience:"
        />
        <Posts />
      </SectionLayout>
      <SectionLayout id="goods">
        <SectionInfo
          title="What I’m good at?"
          descr="My expertise lies in developing modern, cross-browser compatible web applications using the latest front-end technologies such as:"
        />
        <Skills />
      </SectionLayout>
      <SectionLayout id="works">
        <SectionInfo
          title="My Work"
          descr="Welcome to my portfolio showcasing a collection of projects I've worked on as a front-end developer. I take pride in crafting engaging and user-centric web experiences that combine creativity with cutting-edge technologies. Below, you'll find a glimpse of some of my notable projects:"
        />
        <MyWork />
      </SectionLayout>
      <SectionLayout id="contact">
        <SectionInfo
          title="Contact Me"
          descr="I'm thrilled to connect with you! Whether you have a project idea, a question, or simply want to say hello, feel free to reach out using the contact form below. I'm always excited to hear from fellow developers, collaborators, and potential clients."
        />
        <ContactMe />
      </SectionLayout>
    </div>
  </div>
);
export default MainPageContent;
