import { createStore} from 'redux';
// import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';

const configureStore = () => {
    return createStore(rootReducer);
}


export default configureStore;