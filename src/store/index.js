import { createStore } from 'redux';
import appReducer from '../reducer/index';

const reduxStore = createStore(appReducer);

export default reduxStore;
