import React, { Component } from 'react'
//import axios from 'axios';

// const genres = ["lounge", "classical", "electronic", "jazz", "pop", "hiphop", "relaxation", "rock", "songwriter", "world", "metal", "soundtrack"];

export default class Searchbar extends Component {
    state = {
        search:''
    }

    handleChange = (e) => {
        this.props.getSearchTerm(e.target.value)
      
        // this.setState ({
        //     search: e.target.value
        // })
        // console.log(this.)
}

   handleSubmit =(e) => {
       e.preventDefault()
       this.props.handleSearchSubmit(this.state.search)
   }


    render() {
        return (
            <div className='search'>
            <form onSubmit={this.handleSubmit}>
                <input id='searchbar' type='text' name='search' placeholder='Search....'  onChange={this.handleChange}/>
                <input type='submit' value='Search'/>
            </form>
                
            </div>
        )
    }
}
