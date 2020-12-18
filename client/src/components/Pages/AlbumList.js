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

// componentWillReceiveProps(nextProps) { 
//     console.log('new props coming', nextProps)
//      if(this.props.loggedInUser !== nextProps.loggedInUser){
//         console.log('list') 
//         this.displaylist()
//      }
//     }

componentDidMount() {
    this.displaylist()
  

}


load = () => {
    this.setState({
        visiable:this.state.visiable + 3
    })
}

//       componentDidMount() {
//         const playlist= {id:this.props.loggedInUser._id}
//         axios.get('http://localhost:5000/addplaylist',playlist)
//        .then(res=>{
//            console.log(res)
//            this.setState({album:res.data})

//        })
//    }



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
           
            
{/* <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
