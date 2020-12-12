import React, { Component } from 'react'
import axios from 'axios'
//import AlbumList from './AlbumList'
import {Link} from 'react-router-dom';
import './Albumdetails.css';








export default class Albumdetails extends Component {

   state= {
     album: {}
    
   }
  
   componentDidMount () {
       
    axios.get ('https://api.jamendo.com/v3.0/albums/tracks/?client_id=33975c49&limit=all')
    .then((response)=> {
                 console.log(response.data.results)
                 console.log(this.props)
                 const myalbum = response.data.results.filter(album=>{
                     return album.id === this.props.match.params.id
                     
                 })
                 console.log(myalbum)
              this.setState({
              album: myalbum[0],
   })
   
})
}
addPlaylist = (album) => {
    console.log(album)
    const playlist = {album,id:this.props.loggedInUser._id}
    axios.post(process.env.REACT_APP_SERVER_URL +'/addplaylist',playlist)
    .then(response=> {
        console.log(response)
    })
}





   
  

    render() {
        
       
        return (
  
  
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <Link to='/albumlist'>Myalbumlist</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        
         <Link to='/dashboard'>Home</Link>
         
        </li>
        {/* <li className="nav-item">
         <Link to='/albumlist'>Myalbumlist</Link>
        </li> */}
        
        
      </ul>
      <form className="d-flex">
       
       <Link to='/' onClick={this.logout}>Logout</Link>
        
      </form>
    </div>
  </div>
</nav>
  
  
  
  <div className='flex-container'>
    <div><img className='album-image' src={this.state.album.image} alt={this.state.album.name}/></div>
    <div className='cont'>
  <div>{this.state.album.name}<div>
  by {this.state.album.artist_name}</div></div>
 
            <div className='button-details'>
                <button className='playlist-button' onClick={()=>this.addPlaylist(this.state.album)}>Add to playlist</button>
            </div>
            </div>
            </div>
            
           
  {/* <hr></hr> */}
  <div className='tracks-container'>
 
  <h6>{ this.state.album.tracks && this.state.album.tracks.map((trc)=>(
                            <div key={trc.id}>
                            {/* <img src={this.state.album.image} className='tracks-image' alt={trc.name}/> */}
                           
                            
                               {trc.name}
                               <div className='audio'> <audio 
                                ref='audio_tag'
                                autoPlay={false}
                                controls={true}>
                                <source type='audio/ogg'src={trc.audio}/>

                                </audio><hr></hr>
                                </div>
                                
                                
                                
                            </div>
                        ))}</h6>
                        </div>
{
    
    
    
    /* 
            {this.state.albums.map((alb)=>(
                <div key={alb._id}>
                    <div>
                        
                        <h5>{alb.name}</h5>
                        
                        
                    </div>
                </div>
            ))} */}
            
            <div>
                {/* <AlbumList/> */}
            </div>

            </div>

          
        )
    }
}


