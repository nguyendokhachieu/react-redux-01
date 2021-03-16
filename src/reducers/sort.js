const defaultState = {
    orderBy: 'name',
    orderDir: 'asc'
};

const sort = (state = defaultState, action) => {
    if (action.type === 'SORT') {
        state.orderBy = action.orderBy;
        state.orderDir = action.orderDir;

        return state;
    }
    return state;
};

export default sort;