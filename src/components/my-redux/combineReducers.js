export default function combineReducers(combine) {
    return (state = {}, action) => {
        let nextState = {};
        let hasChange = false
        for (let key in combine) {
            let reduce = combine[key];
            nextState[key] = reduce(state[key], action);
            hasChange = hasChange || state[key] !== nextState[key]
        }
        hasChange = hasChange || Object.keys(state).length !== Object.keys(nextState).length;
        return hasChange ? nextState : state
    }
}