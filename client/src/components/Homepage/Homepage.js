
import {Link} from 'react-router-dom';
import './homepage.css';
import React, { Component } from 'react'
//import Navbar from '../Navbar';



let imgUrl = '/images/musica-homepage.jpg';
const divStyle= {
    backgroundImage:'url('+imgUrl+')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '100vh',
    color: 'white',
   
    
    }
export default class Homepage extends Component {
   
   
    
    render() {
        return (
            
            <div className="dark-overlay " style={divStyle}>
           
             
             
             
                    <div className="hero">

                    <h1>Where words fail, music speaks.</h1>
                    <Link to="/login">Try it for free</Link>
                     
                     
                      
                    </div>
                   
                      
                    
                
              
            </div>
            
                 
            
              
           
           
        )
    }
}
