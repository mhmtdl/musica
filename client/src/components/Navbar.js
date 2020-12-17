import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AuthService from '../services/authService'



export default class Navbar extends Component {
     
    service = new AuthService()

    logout = () => {
        this.service.logout()
        .then(response => {
            console.log(response)
            // this.props.getTheUser(null)
        })
        .catch(err => {
            console.log(err)

        })
    }

  
   
   
    render() {
        return (
            <div>
            
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className='container-fluid'>
<Link to='/dashboard'>Musica</Link>

 

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto pr-1 ">
     
      
      <li className="nav-item ">
      <Link to='/albumlist'>Myalbumlist</Link>
      </li>
      
      <li className="nav-item ">
      <Link to='/' onClick={this.logout}>Logout</Link>
      </li>
      
     
    </ul>
  </div>
  </div>
</nav>

                
            </div>
        )
    }
}











 /* <nav style={{backgroundColor:'black',height:'30px'}}>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                <Link to='/logout' onClick={this.logout}>Logout</Link>
            </nav> */