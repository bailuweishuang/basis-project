const defaultState = 10;

const dome = (state = defaultState, action) => {
    console.log(22, state, action);
    const { type, key } = action;
    switch (type) {
        case 'add':
            return state + key;
        case "mul":
            return 2
        default:
            return state
    }
}

export default dome