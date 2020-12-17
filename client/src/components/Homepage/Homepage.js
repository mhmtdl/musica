
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
           
              {/* <Navbar/>  */}
             
              <div className="inner">
                <div class="container">
                  <div class="row landing-row d-flex">
                    <div className="hero">

                    <h1>Where words fail, music speaks.</h1>
                    <Link to="/login">Try it for free</Link>
                     
                      {/* <h1 style={{color:'#fafafa',fontFamily:'sans-serif',fontSize:'36px',marginLeft:'10vh'}}>Where words fail, music speaks.</h1> */}
                      
                    </div>
                   
                      {/* <div className='col-lg-6 mr-5 pt-4 '> */}


                      {/* <button style={{width:'200px',fontWeight:'bold',height:'45px',fontSize:'larger',borderRadius:'20px',marginLeft:'9vh'}} >
                      <Link to="/login">Try it for free</Link></button> */}
                           
                      {/* </div> */}
                    
                  </div>
                </div>
              </div>
              
            </div>
            
                 
            
              
           
           
        )
    }
}
