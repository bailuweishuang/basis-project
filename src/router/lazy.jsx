import PropTypes from 'prop-types';
import Config from './config';

const { lazy, Suspense } = React;

class Component extends React.Component {
  static propTypes = {
    load: PropTypes.object.isRequired,
  };

  render() {
    const { load } = this.props;
    const LazyComponent = lazy(() => load);
    return (
      <Config.Consumer>
        {({ defaultPreloadLoading }) => {
          const renderComponent = (
            <Suspense fallback={defaultPreloadLoading || <span>加载中...</span>}>
              <LazyComponent {...this.props} />
            </Suspense>
          );
          return renderComponent;
        }}
      </Config.Consumer>
    );
  }
}

export default Component;
