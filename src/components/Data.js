import React from 'react';
import {

  FaHome,
  FaFolderOpen,
  FaInfo,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export const Data = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaFolderOpen />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/info',
    icon: <FaInfo />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaEnvelope />,
    cName: 'nav-text'
  },
];


export const social = [
  {
    id: 1,
    url: 'https://github.com/ilovecodingallday',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/michaelcurtismcnulty/',
    icon: <FaLinkedin />,
  },

];