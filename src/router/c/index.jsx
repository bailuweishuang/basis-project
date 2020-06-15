import { lazy } from 'react';

const Demo = lazy(() => import('@/pages/a'));

export default {
  path: '/c',
  component: Demo,
  title: 'third',
  children: [
    {
      path: '/children',
      title: 'thirdChildren',
      component: Demo,
    },
  ],
};
