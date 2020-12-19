//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Signup from './components/Signup'
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import AuthService from './services/authService';
//import Navbar from './components/Navbar';
import Homepage from './components/Homepage/Homepage';
import Dashboard from './components/Pages/Dashboard';
//import Searchbar from './components/Pages/Searchbar';
import Albumdetails from './components/Pages/Albumdetails'
import AlbumList from './components/Pages/AlbumList';







export default class App extends Component {
  state = {
    loggedInUser: null,
    loading: false
  }

  service = new AuthService()

  componentDidMount() {
    this.service.loggedin()
    .then((user) => {
      this.setState({
        loggedInUser: user,
        loading:true
      })
    })
    .catch((err) => {
      console.log(err)
      this.setState({loading:true})
    })
  }
  
  getTheUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }
  render() {
    console.log(this.state.loggedInUser,'gojj')
    
    if(!this.state.loading){
       return <p>loading</p>
     }
   
    return (
      <div className="App">
        
        <div>
        

      <Switch>

        
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path ='/login' render={()=>
        <Login getTheUser={this.getTheUser}/>
        }/>
        <Route exact path='/dashboard' component={Dashboard}/>
        
         <Route
            exact
            path="/albums/:id"
            render={(props) => <Albumdetails{...props} loggedInUser={this.state.loggedInUser} />}
          />
       
         <Route
            exact
            path="/albumlist"
            render={(props) => <AlbumList{...props} loggedInUser={this.state.loggedInUser} />}
          />

       
       
        
        

      </Switch>
      </div>
      </div>
    )
  }
}

















// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
