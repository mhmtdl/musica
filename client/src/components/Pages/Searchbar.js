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
      
        
}



    render() {
        return (
            <div className='search'>
             
           
  <form className="form-inline justify-content-center ">
    <input className="form-control mr-sm-2 " type="search" placeholder="Search independent albums && genres......." aria-label="Search" onChange={this.handleChange}/>
    
    
   </form>
   
                
            </div>
        )
    }
}







