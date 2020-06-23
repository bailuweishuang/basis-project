import Lazy from '../lazy.jsx';

const Demo = (props) => <Lazy {...props}  load={import('@/pages/a')} />;

export default {
  path: '/c',
  component: Demo,
  title: 'third',
};
