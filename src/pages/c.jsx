//import styles from './style.less';
import './style.less';
export default () => {
  Api.post('/common/login/phoneLogin');
  return (
    <div className="a">
      123
      {/* <p className={styles.b}>456</p> */}
      <p>789</p>
    </div>
  );
};
