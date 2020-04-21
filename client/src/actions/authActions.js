import {REGISTER_SUCCES, REGISTER_FAIL, LOGIN_SUCCES, USER_LOGED, LOGIN_FAIL, AUTH_ERRORS, CLEAR_ERRORS, LOGOUT} from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'


//Load User
export const loadUser=()=>dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    
        axios.get('/api/auth')
        .then(res=>dispatch({
            type:USER_LOGED,
            payload:res.data
        }))
        .catch(()=>dispatch({
            type:AUTH_ERRORS
        }))
    }



//Register user
export const register=fromData=>dispatch=>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

    axios.post('/api/user',fromData,config)
    .then(res=>{dispatch({
        type:REGISTER_SUCCES,
        payload:res.data
    })
    dispatch(loadUser())
    })
    .catch(err=>dispatch({
        type:REGISTER_FAIL,
        payload:err.response.data.msg
    }))
}


//Login User

export const login = fromData => dispatch =>{
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    axios.post('/api/auth',fromData,config)
    .then(res=>{dispatch({
        type:LOGIN_SUCCES,
        payload:res.data
    })
     dispatch(loadUser())
    })
    .catch(err=>dispatch({
        type:LOGIN_FAIL,
        payload:err.response.data.msg
    }))
}

//Logout User
export const logout=()=>dispatch=>{
    dispatch({
        type:LOGOUT
    })

}
//Clear Errors
export const ClearErrors=()=>dispatch=>{
    dispatch({
        type:CLEAR_ERRORS
    })
   }