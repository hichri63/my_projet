import {combineReducers} from 'redux';
import AnnonceReducer  from './annonceReducer';
import AuthReducer from './AuthReducer';
import AlertReducer from './AlertReducer';


export default combineReducers({annonce:AnnonceReducer, auth:AuthReducer, alert:AlertReducer})