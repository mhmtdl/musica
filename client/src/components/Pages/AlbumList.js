import React, { Component } from 'react'
import axios from 'axios';

export default class AlbumList extends Component {
   
   state = {
       user: null
   }



   displaylist = (user) => {
    
    const id = this.props.loggedInUser ? this.props.loggedInUser._id : null
    console.log(id)
    axios.get('http://localhost:5000/user/'+id)
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

//       componentDidMount() {
//         const playlist= {id:this.props.loggedInUser._id}
//         axios.get('http://localhost:5000/addplaylist',playlist)
//        .then(res=>{
//            console.log(res)
//            this.setState({album:res.data})

//        })
//    }



 removelist = (albumId) => {
    axios.post('http://localhost:5000/removeplaylist',{id:this.state.user._id,albumId})
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
            return <p>oing...</p>
        }
        
       
        return (
            <div>

            {this.state.user.playlist.map(album=>{
                return (
                 <div><p>{album.name}</p>
                 
                 <button onClick={()=>this.removelist(album.id)}>Remove</button>
                 
                 </div>

                ) 
            
                
            })}

                
                
                
                
                {/* <ul>
        {this.state.album.map(person => <li>{person.artist_name}</li>)}
      </ul> */}
            </div>
        )
    }
    
}
