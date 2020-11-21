//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Signup from './components/Signup'
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
        
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
