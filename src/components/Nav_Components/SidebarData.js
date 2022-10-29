import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Todo List',
    path: '/todo',
    icon: <FcIcons.FcTodoList />,
    cName: 'nav-text',
  },
  {
    title: 'About Me',
    path: '/about-me',
    icon: <FcIcons.FcDocument />,
    cName: 'nav-text',
  },
  {
    title: 'Timelines',
    path: '/timelines',
    icon: <FcIcons.FcTimeline />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text',
  // },
];
