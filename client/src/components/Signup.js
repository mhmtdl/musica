

import React, { Component } from 'react'
import AuthService from '../services/authService'
import {Link} from 'react-router-dom'

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
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type='text' name='username' value={this.state.username} onChange={e=>this.handleChange(e)}/>
                    <label>Email:</label>
                    <input type='email' name='email' value={this.state.email} onChange={e=>this.handleChange(e)} placeholder='Your email'/>
                    <label>Password:</label>
                    <input type='password' name='password' value={this.state.password} onChange={e=>this.handleChange(e)} placeholder='********'/>

                    <input type='submit' value='Create account'/>
                    <p>Already have account?<Link to={'/'}>Login</Link></p>

                </form>
            </div>
        )
    }
}
