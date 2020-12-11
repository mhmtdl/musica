//import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
//import ReactPaginate from 'react-paginate'
import './Albums.css'
//import axios from 'axios';
//import Albumdetails from './Albumdetails'

export default class Albums extends Component {
   
   state = {
       albums : [],
       visiable: 6,
      
      
      
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
          visiable: this.state.visiable + 6
      })
  }

  

    render() {
       
        const arrayToFilter = this.props.filteredList.length > 0 ? this.props.filteredList : this.props.albums
        
        return (
            <div className='albums-container'>

                <div><h6>Independent Albums</h6></div>

                
                <div className='row shadow-lg p-3 mb-5 bg-white rounded' >

                
               
               {arrayToFilter.slice(0,this.state.visiable).map((album)=>(
                   <div key={album.id}
                   className='col-md-4'>
                   <div className='album-image'>

                
                   
                   
                      <img src={album.image} alt={album.name} className='rounded-circle'/>
                      <p>by {album.artist_name}</p>
                      
                     
                       <div>
                          <Link to={`/albums/${album.id}`}><p>{album.name}</p></Link> 
                         {/* <Albumdetails/> */}
                        
                     </div>   
                    
                    
                     
                   </div>
                   </div>

                ))}
            </div>
            <hr/>
            <div className='col-md-12'>
            
                <button type= 'button' onClick={this.loadmore} className={'btn btn-sm btn-primary'}>More Albums</button>
                
            </div>
           

                
            </div>
        )
    }
}





