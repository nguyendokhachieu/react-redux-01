import reducer from './reducers/index';
import { sort } from './actions/index';
const { createStore } = require("@reduxjs/toolkit");

const store = createStore(reducer);

console.log(store.subscribe(()=>console.log('subscribe called')));

console.log(store.getState());

store.dispatch(sort('time', 'desc'));

console.log(store.getState());

export default store;
