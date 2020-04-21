 import { ADD_ANNONCE, DELETE_ANNONCE, SAVE_ANNONCE, UPDATE_ANNONCE, ClEAR_ANNONCE, ANNONCE_ERROR,GET_ANNONCE,REMOVE_CURRENT_ANNONCE,GET_All_ANNONCE } from '../actions/types';
 import { v4 as uuidv4 } from 'uuid';

const intialState = 
    {
        annonce: [],
        saved: null,
        errors:null
    }

const AnnonceReducer = (state=intialState, action)=>{
     switch(action.type){
        case GET_ANNONCE:
            return{
                ...state,
                annonce: action.payload
            }
         case ADD_ANNONCE:
             return {
                 ...state,
                 annonce:[action.payload, ...state.annonce]
             }
             case DELETE_ANNONCE:
                 return {
                     ...state,
                     annonce:state.annonce.filter(el=>el._id !== action.payload)
                 }
                 case SAVE_ANNONCE:
                     return {
                         ...state,
                         saved: action.payload
                     }
                     case UPDATE_ANNONCE:
                         return{
                             ...state,
                            annonce: state.annonce.map(el => el._id === action.payload._id ? action.payload : el)
                         }
                         case ClEAR_ANNONCE:
                             return {
                                 ...state,
                                 saved:null
                             }
                             case ANNONCE_ERROR:
                                 return {
                                   ...state,
                                   errors: action.payload
                             }
                             case REMOVE_CURRENT_ANNONCE:
                                return{
                                    ...state,
                                    annonce:[]
                                }
         default:
             return state
     }
}

export default AnnonceReducer

