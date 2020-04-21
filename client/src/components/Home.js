import React from 'react';
import Annoncelist from './Annoncelist'
import AnnonceForm from './AnnonceForm'
import {loadUser} from'../actions/authActions';
import {connect} from 'react-redux';


   class Home  extends React.Component {
    componentWillMount(){
        this.props.loadUser()
    }
     render(){
     return (
         <div>
             <div className="row">
                 <div className="col-6">
                     <AnnonceForm />
                 </div>
                 <div className="col-6">
                     <Annoncelist />
                 </div>
             </div>
         </div>
     );
 };
 }
export default connect(null,{loadUser})(Home);