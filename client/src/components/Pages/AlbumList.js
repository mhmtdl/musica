import React, { Component } from 'react'
import axios from 'axios';
import './AlbumList.css'
//import {Link} from 'react-router-dom';
import Navbar from '../Navbar';

let imgUrl = '/images/albumlist.jpg';

const divStyle = {
    backgroundImage:'url('+imgUrl+')',
    backgroundSize:'cover'
}

export default class AlbumList extends Component {
   
   state = {
       user: null,
       visiable:1,
   }



   displaylist = (user) => {
    
    const id = this.props.loggedInUser ? this.props.loggedInUser._id : null
    console.log(id)
    axios.get(process.env.REACT_APP_SERVER_URL +'/user/'+id)
    .then(response=> {
        
        console.log(response,'')
        this.setState({
         user:response.data
        })
    })
    .catch(err=>{
        console.log(err)
    })
}



componentDidMount() {
    this.displaylist()
  

}


load = () => {
    this.setState({
        visiable:this.state.visiable + 3
    })
}





 removelist = (albumId) => {
    axios.post(process.env.REACT_APP_SERVER_URL+'/removeplaylist',{id:this.state.user._id,albumId})
    .then(response=>{
        
        console.log(response)
        this.displaylist()
    })
    .catch(err=>{
        console.log(err)
    })

 }
   
   
    render() {
        console.log(this.props.loggedInUser,'user')
       
        if(!this.state.user){
            return <p>Loading...</p>
        }
        
       
        return (
            <div>
            <Navbar/>
           
            




            
            {this.state.user.playlist.map(album=>{
                return (
                 <div key={album._id}>
                  
                 <div  className='albumlist' >
                 
                 <img src={album.image}alt={album.name}/>
                 <div>
                 
                
                 
                 
                
                <div className='bas'>
                <div className='aname'>

                  <h6>{album.name}</h6>
                 </div>
                 <div className='name'>
                 
                <h6>by  {album.artist_name}</h6>
                 
                 </div>
                 </div>
                 <div className='button-remove'>
                 <button className='remove-list' onClick={()=>this.removelist(album.id)}>Remove</button>
                 </div>
                 </div>
                 </div>
               
                 
                 
                <div className='albumtracks'style={divStyle}>
                 <p>{album.tracks.slice(0,this.state.visiable).map((tx)=>(
                    <div key={tx._id}>
                    <div><h6>{tx.name}</h6>
                    <div>
                    <audio 
                                ref='audio_tag'
                                autoPlay={false}
                                controls={true}>
                                <source type='audio/ogg'src={tx.audio}/>

                                </audio>
                                </div>
                    </div> 
                    
                    </div>
                    
                 ))}</p>
                
                 </div>
                
                 
                <button  type= 'button' onClick={this.load} className=' more-tracks'>More Tracks</button>
                
                
                
                 
                </div>
                
                ) 
                
                
            })}

            
                
                
                
            
            </div>
        )
    }
    
}
