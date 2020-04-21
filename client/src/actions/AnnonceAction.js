import {ADD_ANNONCE, DELETE_ANNONCE, SAVE_ANNONCE, UPDATE_ANNONCE, ClEAR_ANNONCE, ANNONCE_ERROR,REMOVE_CURRENT_ANNONCE,GET_ANNONCE } from './types'
import axios from 'axios'


//Get annonce
//private route
export const getAnnonce = () => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.get('/api/annonce', config)
        .then(res => dispatch({
            type: GET_ANNONCE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ANNONCE_ERROR,
            payload: err.response.data.msg

        }))

}
//Remove current annonce
export const RemoveCurrentAnnonce=()=>dispatch=>{
    dispatch({
        type:REMOVE_CURRENT_ANNONCE
    })
}




export const addannonce = newAnnonce =>dispatch=>{
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.post('/api/annonce', newAnnonce, config)
        .then(res => dispatch({
            type: ADD_ANNONCE,
            payload: res.data
        }))
        .catch(errors => dispatch({
            type: ANNONCE_ERROR,
            payload: errors.response.data.msg

        }))
}
export const deleteannonce = id => dispatch=>{
    axios.delete('/api/annonce/${_id}')
          .then(()=>dispatch({
         type: DELETE_ANNONCE,
         payload: id
    }))
    .catch(errors => dispatch({
        type: ANNONCE_ERROR,
        payload: errors.response.msg

    }))

    
}
export const saveAnnonce = annonce => dispatch=> {
    dispatch({
        type: SAVE_ANNONCE,
        payload: annonce
    })
}

export const editannonce = updatedAnnonce =>dispatch=> {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.put('/api/annonce/${updatedAnnonce:_id}',updatedAnnonce, config)
          .then(()=> dispatch({
        type: UPDATE_ANNONCE,
        payload: updatedAnnonce

    }))
    .catch(errors => dispatch({
        type: ANNONCE_ERROR,
        payload: errors.response.msg

    }))

   
}

export const clearann = () =>dispatch=>{
    dispatch({
        type: ClEAR_ANNONCE,


    })
}