import {
    createStore,
    applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import reducers from '../reducers';


const composeEnhancers = composeWithDevTools({realtime: true});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
