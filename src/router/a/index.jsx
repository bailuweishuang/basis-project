import { lazy } from 'react';

const Demo = lazy(() => import('@/pages/demo'));
const Demo1 = lazy(() => import('@/pages/a'));

export default {
  path: '/a',
  component: Demo,
  title: 'first',
  children: [
    {
      path: '/children',
      component: Demo,
      title: 'firstChildren',
      children: [
        {
          path: '/childrent',
          title: 'firstChildrent',
          children: [
            {
              path: '/childrent1231',
              title: 'firstChildrent1231',
              component: Demo,
            },
          ],
        },
      ],
    },
    {
      path: '/childrent456',
      title: 'firstChildrent456',
      component: Demo1,
      children: [
        {
          path: '/detail',
          title: 'asad',
          component: Demo1,
          hidden: true,
        },
        {
          path: '/detail1',
          title: 'asa12d',
          component: Demo1,
        },
      ],
    },
  ],
};
