import React, { Component } from 'react'
import AuthService from '../services/authService'
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    
    state = {
        username: '',
        email:'',
        password:'',
        errorMsg:'',
        redirect:false
    }

    service = new AuthService()

    onChangeHandler = e => {
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.service.login(this.state.username,this.state.email,this.state.password)
        .then(user=> {
            console.log(user)
            
        })
    }
    
    
    
    render() {
       if(this.state.redirect) {
           return <Redirect to='/'></Redirect>
       }
       
        return (
            <div>
               <form onSubmit={this.submitHandler}>
                   <label>Username</label>
                   <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.onChangeHandler}></input>
                   <label>Email</label>
                   <input type='email' name='email' value={this.state.email} onChange={e=>this.handleChange(e)} placeholder='Your email'></input>
                   <label>Password</label>
                   <input type='password' name='password' placeholder='********' value={this.state.password} onChange={this.onChangeHandler}></input>
                   <button>Login</button>

                </form>
                {this.state.errorMsg} 
            </div>
        )
    }
}
