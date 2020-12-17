import React, { Component } from 'react'
import AuthService from '../services/authService'
import {Redirect} from 'react-router-dom';
import './Login.css'
import {Link} from 'react-router-dom'


let imgUrl = '/images/casette-1.jpg';
const divStyle= {
    backgroundImage:'url('+imgUrl+')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '97vh',
    color: 'white'
    }




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
        console.log('go')
        this.service.login(this.state.username,this.state.email,this.state.password)
        .then(user=> {
            console.log(user)
            this.props.getTheUser(user)
            this.setState({
                redirect:true,
                username:'',
                email:'',
                password:''
            })
            
        })
        .catch(err=> {
            console.log(err.response)
            this.setState({
                errorMsg:err.response.data.message
            })
        })
    }
    
    
    
    render() {
      console.log(this.state.redirect) 
        if(this.state.redirect) {
           return <Redirect to='/dashboard'></Redirect>
       }
       
        return (

           











        <div className='inner-form form-continer' style={divStyle}>
        <div className='row w-50 text-dark'>
        <div className='col-lg-6 col-10 m-auto'>
          
          <form onSubmit={this.submitHandler}>
           <div className='form-group'>
               <label>Username</label>
               <input type='text' name='username' class='form-control' placeholder='username' value={this.state.username} onChange={this.onChangeHandler}></input>
               </div>
               <div className='form-group'>
               <label>Email</label>
              <input type='email' name='email' className='form-control' value={this.state.email} onChange={e=>this.onChangeHandler(e)} placeholder='Your email'></input>
              </div>
               <div className='form-group'>
              <label>Password</label>
               <input type='password' name='password' placeholder='********' className='form-control' value={this.state.password} onChange={this.onChangeHandler}></input>
              </div>
              <button>Login</button>

            </form>
            {this.state.errorMsg} 
            <p className='mt-2'><small>Not a member yet?<Link to='/signup'>Sign up</Link></small></p>
            </div>
           </div>
           </div>
























           









            
        )
    }
}






            
