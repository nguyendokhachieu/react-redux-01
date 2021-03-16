const defaultState = '1720088';

const id = (state = defaultState, action) => {
    if (action.type === 'CHANGE_ID') {
        state = action.id;
        return state;
    }
    return state;
};

export default id;