import Lazy from '../lazy.jsx';
const Demo = (props) => <Lazy {...props} load={import('@/pages/a')} />;
const Demo1 = (props) => <Lazy {...props} load={import('@/pages/demo')} />;

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
