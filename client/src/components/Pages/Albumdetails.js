import React, { Component } from 'react'
import axios from 'axios'
//import AlbumList from './AlbumList'
//import {Link} from 'react-router-dom';







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
    axios.post('http://localhost:5000/addplaylist',playlist)
    .then(response=> {
        console.log(response)
    })
}


   
  

    render() {
        
       
        return (
  
  
  <div>
  
  {this.state.album.name}
  <div><img src={this.state.album.image} alt={this.state.album.name}/></div>
  <h6>{ this.state.album.tracks && this.state.album.tracks.map((trc)=>(
                            <div key={trc.id}>
                                {trc.name}
                                 <audio
                                ref='audio_tag'
                                autoPlay={false}
                                controls={true}>
                                <source type='audio/ogg'src={trc.audio}/>

                                </audio> 
                            </div>
                        ))}</h6>
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
                <button onClick={()=>this.addPlaylist(this.state.album)}>Playlist</button>
            </div>
            <div>
                {/* <AlbumList/> */}
            </div>

            </div>

          
        )
    }
}


