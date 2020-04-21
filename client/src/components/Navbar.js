import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import {RemoveCurrentAnnonce} from '../actions/AnnonceAction'



const Navbar = props => {
    const logout=()=>{
        props.logout()
        props.RemoveCurrentAnnonce()
    }

    const userConnected = () => {
        return (
            <ul className="row d-flex w-50">
                <li className="col-auto">
                    hello, {props.auth.user && props.auth.user.first_name + '' + props.auth.user.last_name}
                </li>
                <li className="col">
                    <Link id="menu-item" to="/">Home</Link>
                </li>
                <li className="col">
                    <Link id="menu-item" to="/about">About</Link>
                </li>
                <li className="col">
                    <a href="#!" onClick={logout} >
                        {/* <i className="fas fa-sign-out-alt"></i> */}
                    Logout

                </a>

                </li>
            </ul>)
    }
    const guest = () => {
        return (
            <ul className="drop"  >
                <li className="sousmenu" >
                    <a className="active" href="#">Register</a>
                    <div className="dropdown"  >
                        <a ><Link to="/register/client">As Client</Link></a>
                        <a ><Link to="/register/Trans">As Transporter</Link></a>
                    </div>
                </li>

                <li>
                    <a href="#"><Link to="/login/Trans">Login</Link></a>
                </li>
            </ul>
        )
    }

    return (
        <div className="nav">
            <nav>
                <input name="" type="checkbox" id="check" />
                <label for="check" className="checkbtn"  >
                    <i className="fas fa-bars"  ></i>

                </label>
                <label className="logo"> DesignX</label>
                {
                    props.auth.user ? userConnected() : guest()
                }

            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout,RemoveCurrentAnnonce })(Navbar)