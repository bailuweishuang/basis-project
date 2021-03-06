import Lazy from '../lazy.jsx';
const Demo = (props) => <Lazy {...props} load={import('@/pages/d')} />;
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
