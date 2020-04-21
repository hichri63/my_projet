import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addannonce, editannonce, clearann } from '../actions/AnnonceAction'




class AnnonceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Datedep: "",
            villedep: "",
            villearr: "",
            imagevoiture: ""

        }
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(nextprops) {
        // console.log(nextprops.save)
        this.setState(nextprops.save)
    }
    render() {
        return (
            <div>
                <div>
                    <label>Date depart :</label>
                    <input onChange={this.handelChange} name="Datedep" type="text" value={this.state.Datedep} />
                </div>
                <div>
                    <label>Ville depart :</label>
                    <input onChange={this.handelChange} name="villedep" type="text" value={this.state.villedep} />
                </div>
                <div>
                    <label>Ville arrivée :</label>
                    <input onChange={this.handelChange} name="villearr" type="text" value={this.state.villearr} />
                </div>
                <div>
                    <label>Image Voiture:</label>
                    <input onChange={this.handelChange} name="imagevoiture" type="text" value={this.state.imagevoiture} />
                </div>
                <button className='btn btn-info' onClick={e => {
                    e.preventDefault()
                    if (this.props.save) {
                        this.props.editannonce(this.state)
                        this.props.clearann()
                    } else {
                        this.props.addannonce(this.state)
                    }

                    this.setState({ Datedep: "", villedep: "", villearr: "", imagevoiture: "" })
                }}>{this.props.save ? "Edit Annonce" : "ADD Annonce"}</button>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        save: state.annonce.saved
    }
}

//const mapDispatchToprops = dispatch => {
  //  return {
    //    addNewAnnonce: el => dispatch(addannonce(el)),
      //  editannonce: updateannonce => dispatch(Editannonce(updateannonce)),
        //clearsave: ()=>dispatch(Clearann())
   // }
//}
export default connect(mapStateToProps, { addannonce, editannonce, clearann })(AnnonceForm)