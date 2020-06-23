const { Provider, Consumer } = React.createContext({});

class Component extends React.Component {
  static defaultProps = {
    children: [],
    defaultPreloadLoading: null,
    globalData: {},
  };

  static Consumer = Consumer;

  render() {
    const { children, defaultPreloadLoading, globalData } = this.props;
    return (
      <Provider
        value={{
          defaultPreloadLoading,
          globalData,
        }}>
        {children}
      </Provider>
    );
  }
}


export default Component;
