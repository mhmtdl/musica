import React, { Component } from 'react'
import Albums from './Albums'
//import Tracks from './Tracks'
import Searchbar from './Searchbar'
import './Dashboard.css';
import axios from 'axios';

//import Navbar from '../Navbar';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';



export default class Dashboard extends Component {
   
    
    
    
    state = {
         albums: [],
         searchValue:"",
         
     }

     componentDidMount () {
        axios.get ('https://api.jamendo.com/v3.0/albums/musicinfo/?client_id=33975c49&limit=all')
        .then((response)=> {
            console.log(response)
            this.setState({
                albums: response.data.results,
                
                
            })
        })
        this.filterAlbums()
      }

      getSearchTerm = (searchValue) => {
        this.setState({
            searchValue:searchValue
        }) 
        //console.log(searchValue)
      }

      filterAlbums = () => {
          
         console.log(this.state.searchValue)
           console.log(this.state.albums)
      }
    
    render() {
       // console.log(this.state.albums)
        const filteredList = this.state.albums.filter(item => {
             if( item.musicinfo && item.musicinfo.tags.includes(this.state.searchValue) ||item.name.toLowerCase() === this.state.searchValue.toLowerCase()) {
                 return item;
             }else {
                 return false
             } 
             
             
            
            // if(this.state.searchValue===""){
            //     return true;
            // } else {
            //     return item.name.toLowerCase()
            //     .includes(this.state.searchValue.toLowerCase())
            // }
        })
       // console.log(filteredList)
      
      
      
        return (
           
           
            
            <div className='dashboard-container '>
            

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

           
            {/* <div>
            <Searchbar getSearchTerm={this.getSearchTerm}/>
            </div> */}

           <div>
            <div>
            <Searchbar getSearchTerm={this.getSearchTerm}/>
            
           
           <Albums filteredList={filteredList} albums={this.state.albums}/>
           </div>
           </div>
             {/* <div><Albumdetails/></div> */}
           
           
                
            </div>
        )
    }
}

