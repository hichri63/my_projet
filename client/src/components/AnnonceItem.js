import React from 'react'
import {connect} from 'react-redux'
import {deleteannonce,saveAnnonce} from '../actions/AnnonceAction'


const AnnonceItem = props =>{
    return(
        <div>
      <img src={props.annonce.imagevoiture} />
       <h1>{props.annonce.Datedep}</h1>
       <h1>{props.annonce.villedep}</h1>
       <h1>{props.annonce.villearr}</h1>
       <button className='btn btn-info' onClick={()=>props.saveAnnonce(props.annonce)}>Edite</button>
       <button className='btn btn-danger' onClick={()=>props.deleteannonce(props.annonce._id)}>Delete</button>
        </div>
    )
}
 




export default connect(null,{deleteannonce, saveAnnonce})(AnnonceItem)