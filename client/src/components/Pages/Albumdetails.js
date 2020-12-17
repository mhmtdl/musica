import React, { Component } from 'react'
import axios from 'axios'
//import AlbumList from './AlbumList'
//import {Link} from 'react-router-dom';
import './Albumdetails.css';
import Navbar from '../Navbar';








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

     <Navbar/>
    {/* <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
<Link to='/dashboard'>Musica</Link>

 

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto pr-1 ">
     
      <li className="nav-item">
      <Link to='/albumlist'>Myalbumlist</Link>
      </li>
      
      <li className="nav-item ">
      <Link to='/' onClick={this.logout}>Logout</Link>
      </li>
      
     
    </ul>
  </div>
</nav>
               
            </div> */}

  
  <div className='flex-container'>
    <div><img className='album-image' src={this.state.album.image} alt={this.state.album.name}/></div>
    <div className='cont'>
  <div>{this.state.album.name}<div>
  by {this.state.album.artist_name}</div></div>
 
            <div className='button-details'>
                <button className='playlist-button' onClick={()=>this.addPlaylist(this.state.album)}>Add to albumlist</button>
            </div>
            </div>
            </div>
            
           
  
  <div className='tracks-container'>
 
  <h6>{ this.state.album.tracks && this.state.album.tracks.map((trc)=>(
                            <div key={trc.id}>
                          
                           
                            
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

            
            <div>
                
            </div>

            </div>

          
        )
    }
}


