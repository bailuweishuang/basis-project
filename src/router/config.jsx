import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({});

class Component extends React.Component {
	static defaultProps = {
		children: [],
		defaultPreloadLoading: null,
		globalData: {},
	};

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.arrayOf(PropTypes.node),
		]),
		defaultPreloadLoading: PropTypes.element,
		globalData: PropTypes.object,
	};

	static Consumer = Consumer;

	render() {
		const { children, defaultPreloadLoading, globalData } = this.props;
		return (
			<Provider
				value={{
					defaultPreloadLoading,
					globalData,
				}}
			>
				{children}
			</Provider>
		);
	}
}

export default Component;