

import React, { Component } from 'react'
import AuthService from '../services/authService'
import {Link} from 'react-router-dom'




let imgUrl = '/images/eskiplak-3.jpg';
const divStyle= {
    backgroundImage:'url('+imgUrl+')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '97vh',
    color: 'white'
    }



export default class Signup extends Component {
   
    state = {
        username: '',
        email: '',
        password: ''
    }

    service = new AuthService()

    handleChange = e => {
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.service.signup(this.state.username,this.state.email,this.state.password)
        .then(response=> {
            console.log(response)
            this.setState({
                username: '',
                email:'',
                password:''
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
   
   
   
    render() {
        return (
            <div className='inner-form form-continer' style={divStyle}>
            <div className='row w-50 text-dark'>
            <div className='col-lg-6 col-10 m-auto'>
              
              <form onSubmit={this.handleFormSubmit}>
               <div className='form-group'>
                   <label>Username</label>
                   <input type='text' name='username' class='form-control' placeholder='username' value={this.state.username} onChange={this.handleChange}></input>
                   </div>
                   <div className='form-group'>
                   <label>Email</label>
                  <input type='email' name='email' class='form-control' value={this.state.email} onChange={e=>this.handleChange(e)} placeholder='Your email'></input>
                  </div>
                   <div className='form-group'>
                  <label>Password</label>
                   <input type='password' name='password' placeholder='********' class='form-control' value={this.state.password} onChange={this.handleChange}></input>
                  </div>
                  <input type='submit' value='Create account'/>
                  <p>Already have account?<Link to={'/login'}>Login</Link></p>
                </form>
               
                
                </div>
               </div>
               </div>
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            // <div>
            //     <form onSubmit={this.handleFormSubmit}>
            //         <label>Username:</label>
            //         <input type='text' name='username' value={this.state.username} onChange={e=>this.handleChange(e)}/>
            //         <label>Email:</label>
            //         <input type='email' name='email' value={this.state.email} onChange={e=>this.handleChange(e)} placeholder='Your email'/>
            //         <label>Password:</label>
            //         <input type='password' name='password' value={this.state.password} onChange={e=>this.handleChange(e)} placeholder='********'/>

            //         <input type='submit' value='Create account'/>
            //         <p>Already have account?<Link to={'/login'}>Login</Link></p>

            //     </form>
            // </div>
        )
    }
}
