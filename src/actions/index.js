export const sort = (orderBy, orderDir) => {
    return {
        type: 'SORT',
        orderBy,
        orderDir
    }
}