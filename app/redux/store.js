import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import taskReducer from './reducers/taskReducer';

const taskConfig = {
    key: 'task',
    storage: AsyncStorage,
};

const reducers = combineReducers({
    task: persistReducer(taskConfig, taskReducer),
});

const store = createStore(reducers);

const persistor = persistStore(store);

export { store, persistor };
