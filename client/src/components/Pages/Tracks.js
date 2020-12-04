// import React, { Component } from 'react'
// import axios from 'axios'
// //import {Link} from 'react-router-dom';
// export default class Artists extends Component {

//    state= {
//        tracks: []
//    }


//    componentDidMount() {
//     axios.get ('https://api.jamendo.com/v3.0/tracks/?client_id=33975c49&limit=all')
//     .then((response)=> {
//         console.log(response)
//         this.setState({
//             tracks: response.data.results
            
//         })
//     })
//    }


//     render() {
//         return (
//             <div>
//             <div className='list' >
               
//                {this.state.tracks.map((track)=>(
//                    <div key={track.id}
//                    className='track-container'>
//                    <div className='track-image'>
//                    <h4>{track.name}</h4>
//                    <h4> {track.artist_name}</h4>
//                    <h4>{track.album_name}</h4>
//                       <img src={track.album_image} alt={track.name}/>
                     
                    
                    
                     
//                    </div>
//                    </div>

//                 ))}
//             </div>
                
//             </div>
//         )
//     }
// }
