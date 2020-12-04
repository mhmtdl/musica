//import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
//import ReactPaginate from 'react-paginate'
import './Albums.css'

export default class Albums extends Component {
   
   state = {
       albums : [],
       visiable: 10,
      
   };

   

//    componentDidMount () {
//      axios.get ('https://api.jamendo.com/v3.0/albums/musicinfo/?client_id=33975c49&limit=all')
//      .then((response)=> {
//          console.log(response)
//          this.setState({
//              albums: response.data.results,
             
             
//          })
//      })
//    }

  loadmore = () => {
      this.setState({
          visiable: this.state.visiable + 10
      })
  }
  

    render() {
       
        const arrayToFilter = this.props.filteredList.length > 0 ? this.props.filteredList : this.props.albums
        
        return (
            <div className='albums-container'>

              
                <div className='list' >
               
               {arrayToFilter.slice(0,this.state.visiable).map((album)=>(
                   <div key={album.id}
                   className='album-container'>
                   <div className='album-image'>
                   <h4>{album.name}</h4>
                   <h4> {album.artist_name}</h4>
                      <img src={album.image} alt={album.name}/>
                      <h4>{album.tracks}</h4>
                     
                     <div>
                         <Link to={`/albums/${album.id}/${album.name}`}><h4>{album.name}</h4></Link>
                        
                     </div> 
                    
                    
                     
                   </div>
                   </div>

                ))}
            </div>
            <div>
                <button type= 'button' onClick={this.loadmore}>More Albums</button>
            </div>

                
            </div>
        )
    }
}





