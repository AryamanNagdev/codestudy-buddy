import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo2 from './components/Logo2/Logo2';
import HomePage from './components/HomePage/HomePage'
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false

      }
    }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }



  render(){
   const { isSignedIn, route }= this.state;
    return (

      <div className="App">
       <Particles className='particles'
          params={particlesOptions}
       /> 
       <Logo2 />
       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange } />
       { route === 'home' 
         ? <div>
             <HomePage />
           </div>
         : (
            route === 'signin' 
            ? <Signin onRouteChange={this.onRouteChange }/>
            : <Register onRouteChange={this.onRouteChange }/>
           )  

       }
      </div>
    
  );
}
}

export default App;
