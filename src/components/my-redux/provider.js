import store from "../../store";

export const Context = React.createContext();

export function Provider(props) {
    console.log(props);
    const { store, children } = props
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect = (mapStateToProps = state => state, mapDispatchToProps) => (WrapComponent) => props => {
    const stroe = React.useContext(Context);
    console.log(stroe);
    const { getState, dispatch, subscribe } = store
    const stateToProps = mapStateToProps(getState())
    const dispatchToProps = { dispatch }
    const [, useFouceUpadte] = React.useReducer(x => x + 1, 0)
    React.useEffect(() => {
        subscribe(() => {
            useFouceUpadte()
        })
    }, [])
    return <WrapComponent {...props} {...stateToProps} {...dispatchToProps}></WrapComponent>
}