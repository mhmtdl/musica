import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AuthService from '../services/authService'



export default class Navbar extends Component {
     
    service = new AuthService()

    logout = () => {
        this.service.logout()
        .then(response => {
            console.log(response)
            this.props.getTheUser(null)
        })
        .catch(err => {
            console.log(err)

        })
    }

  
   
   
    render() {
        return (
            <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
<Link to='/'>Musica</Link>

 

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ml-auto pr-1 ">
     
      <li class="nav-item">
      <Link to='/signup'>Signup</Link>
      </li>
      <li class="nav-item ">
      <Link to='/login'>Login</Link>
      </li>
      <li class="nav-item ">
      <li class="nav-item ">
      <Link to='/login' onClick={this.logout}>Logout</Link>
      </li>
      </li>
     
    </ul>
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