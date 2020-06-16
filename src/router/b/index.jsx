import { lazy } from 'react';

const Demo = lazy(() => import('@/pages/a'));

export default {
  path: '/b',
  title: 'second',
  children: [
    {
      title: 'secondChildren',
      path: '/children',
      component: Demo,
    },
  ],
};