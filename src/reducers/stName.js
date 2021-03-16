const defaultState = 'Nguyen Do Khac Hieu';

const stName = (state = defaultState, action) => {
    if (action.type === 'CHANGE_NAME') {
        state = action.name;
        return state;
    }
    return state;
};

export default stName;