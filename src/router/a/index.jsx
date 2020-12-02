import Lazy from '../lazy.jsx';
const Demo = (props) => <Lazy {...props} load={import('@/pages/a')} />;
const Demo1 = (props) => <Lazy {...props} load={import('@/pages/demo')} />;

export default {
  path: '/a',
  component: Demo,
  title: 'first',
  children: [
    {
      path: '/childrent456',
      title: 'firstChildrent456',
      component: Demo1,
    },
  ],
};
