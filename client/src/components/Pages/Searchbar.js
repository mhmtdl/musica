import React, { Component } from 'react'
//import axios from 'axios';
// import AuthService from '../services/authService'
// import {Link} from 'react-router-dom';

 import './Searchbar.css';




export default class Searchbar extends Component {
     



    
    state = {
        search:''
    }

    handleChange = (e) => {
        this.props.getSearchTerm(e.target.value)
      
        // this.setState ({
        //     search: e.target.value
        // })
        // console.log(this.)
}

//    handleSubmit =(e) => {
//        e.preventDefault()
//        this.props.getSearchTerm(this.state.value)
//    }


    render() {
        return (
            <div className='search'>
             {/* <nav className="navbar navbar-light bg-light">
             <Link to='/dashboard'>Musica</Link>
           
             <Link to='/dashboard'>Home</Link>
             <Link to='/albumlist'>Myalbumlist</Link> */}
           
  <form className="form-inline justify-content-center ">
    <input className="form-control mr-sm-2 " type="search" placeholder="Search independent albums && genres......." aria-label="Search" onChange={this.handleChange}/>
    {/* <Link to='/' onClick={this.logout}>Logout</Link> */}
    
   </form>
   {/* </nav> */}
                
            </div>
        )
    }
}







