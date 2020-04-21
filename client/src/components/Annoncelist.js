import React from 'react'
import {connect} from 'react-redux'
import AnnonceItem from './AnnonceItem'
import {getAnnonce} from '../actions/AnnonceAction';


class Annoncelist extends React.Component  {
    componentDidMount(){
        this.props.getAnnonce()
    }
    render(){
    return(
        <div>
        { this.props.myFav.annonce.length===0 ?
       ( <h1>Your annonce is Empty</h1>)
        : (
            this.props.myFav.annonce.map(el => <AnnonceItem key={el.id}  annonce={el} />)
            )
        
        }
    </div>
     )
    }
}
        
const mapStateToProps = state =>{   
    return{
        myFav:state.annonce
    }
}

export default connect(mapStateToProps,{getAnnonce})(Annoncelist)