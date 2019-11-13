import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Navigation from "./component/navigation/navigation";
import './App.css';
import Particles from 'react-particles-js';
import HomePage from './pages/home'



function App() {
  const particleOptions = {
    "particles": {
      "number": {
          "value": 260,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }

  }
    
  return (
    <div className="App">
       <Particles className='particles'
              params={particleOptions}/>
               <Navigation />
      <div>
        <Switch>
       <Route exact path='/'component={HomePage}/>
       </Switch>
      </div>
      
      
     
    

    </div>
  );
}

export default App;
