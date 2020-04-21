import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, ClearErrors } from '../actions/authActions';
import { setAlert, removeAlert } from '../actions/Alertactions';
import { v4 as uuidv4 } from 'uuid';



class LoginClient extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            role:"Client"
        }
        }

    HandelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
         this.props.history.push('/')

        }
        if(nextProps.auth.errors === "Please register before"  ||  nextProps.auth.errors === "wrong password"){
            let id=uuidv4()
         this.props.setAlert(nextProps.auth.errors,'warning',id)
         setTimeout(() => {
            this.props.removeAlert(id)
            this.props.ClearErrors()

        },5000);
        }
        
    }


    loginNow = () => {
        if (this.state.email === "" || this.state.password === "") {
            let id = uuidv4()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() =>{
                this.props.removeAlert(id)

            },5000);
        }else{
            this.props.login({
                email:this.state.email,
                password:this.state.password
            })
        }

    }
    
    render(){
        return(
            <div className="form-register" >
            <h1>The Login Page </h1>
            <form>
                <h2>{this.state.role}</h2>
                <br/>
                <input  className="input-reg"      name="email"        type="text"     onChange={this.HandelChange} placeholder="Your email" />
                <br/>
                <input  className="input-reg"      name="password"     type="password" onChange={this.HandelChange} placeholder="Your password" />  
                </form>
                <button onClick={this.loginNow} className="btn-btn">LOGIN</button>
        </div>
        )
    }
}

const mapStateToProps= state =>{
    return{
       auth:state.auth
    }    
   }
   


export default  connect(mapStateToProps, {login,setAlert, removeAlert,ClearErrors})(LoginClient)