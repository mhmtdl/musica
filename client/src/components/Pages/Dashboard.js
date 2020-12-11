import React, { Component } from 'react'
import Albums from './Albums'
//import Tracks from './Tracks'
import Searchbar from './Searchbar'
import './Dashboard.css';
import axios from 'axios';
//import Navbar from '../Navbar';



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
            <div>
                
               
            </div>
            <div>
            <Searchbar getSearchTerm={this.getSearchTerm}/>
            </div>

           <div>
           
           <Albums filteredList={filteredList} albums={this.state.albums}/>
           
           </div>
             {/* <div><Albumdetails/></div> */}
           
           
                
            </div>
        )
    }
}

