import {REGISTER_SUCCES, REGISTER_FAIL, LOGIN_SUCCES, USER_LOGED, LOGIN_FAIL, AUTH_ERRORS, CLEAR_ERRORS, LOGOUT} from '../actions/types'
  


const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    user:null,
    errors:null
}



const AuthReducer=(state=initialState, action)=>{
    switch(action.type){
        case USER_LOGED:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_SUCCES:    
        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
               ...action.payload,
               isAuthenticated:true
            }
            case LOGOUT: 
            case AUTH_ERRORS:
            case LOGIN_FAIL:    
            case REGISTER_FAIL:
            localStorage.removeItem('token')
        return {
            ...state,
            token:null,
            user:null,
            isAuthenticated:false,
            errors:action.payload
        }
        case CLEAR_ERRORS:
            return{
                ...state,
                errors:null
            }
        default:
            return state
    }
}
export default AuthReducer;

