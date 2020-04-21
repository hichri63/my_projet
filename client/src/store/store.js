import {createStore, applyMiddleware,compose} from 'redux';
import Rootreducer from '../reducer';
import thunk from 'redux-thunk';
const middelware=[thunk] 

export default createStore(
    Rootreducer,
    compose (applyMiddleware (...middelware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        
       

    
)