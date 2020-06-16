import { Button } from 'antd';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { history } = this.props;
    return (
      <div>
        1231
        <Button onClick={() => history.push('/a/childrent456/detail')}>12321</Button>
      </div>
    );
  }
}
export default Page;
