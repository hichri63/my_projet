import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../actions/Alertactions'
import { v4 as uuidv4 } from 'uuid';
import { register, ClearErrors } from '../actions/authActions'


class RegisterClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone: "",
            role: ""
        }
    }


    HandelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    RegiterNow = () => {
        if (this.state.first_name === "" || this.state.last_name === "" || this.state.email === "" || this.state.password === "" || this.state.phone === "") {
            let id = uuidv4()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        } else {
            this.props.register({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                role: this.state.role
            })
        }
    }


    componentWillReceiveProps(nextProps) {

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }



        if (nextProps.auth.errors === "user already exist") {
            let id = uuidv4()
            this.props.setAlert(nextProps.auth.errors, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.ClearErrors()

            }, 5000);
        }
    }



    render() {

        return (

            <div className="form-register" >
                <h1>the Page trans Register </h1>
                <form>
                    <input className="input-reg" name="first_name" type="text" onChange={this.HandelChange} placeholder="Your first name" />
                    <br />
                    <input className="input-reg" name="last_name" type="text" onChange={this.HandelChange} placeholder="Your last name" />
                    <br />
                    <input className="input-reg" name="email" type="text" onChange={this.HandelChange} placeholder="Your email" />
                    <br />
                    <input className="input-reg" name="password" type="password" onChange={this.HandelChange} placeholder="Your password" />
                    <br />
                    <input className="input-reg" name="phone" type="phone" onChange={this.HandelChange} placeholder="Your phone" />
                    <br />
                    <input  className="input-reg"      name="role"        type="text"    onChange={this.HandelChange} placeholder="Your role" />
                    <br/>

                </form>
                <button onClick={this.RegiterNow} className="btn-btn">REGISTER Trans</button>
            </div>



        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }

}



export default connect(mapStateToProps, { setAlert, removeAlert, register, ClearErrors })(RegisterClient)