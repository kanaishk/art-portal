import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Home from '../pages/Home/Home';
import Artist from '../pages/Gallery/Artist';
import Crafts from '../pages/Gallery/Crafts';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
   render() {
      return (
         <div className='App'>
            <Navigation />
            <Router>
               <Routes>
                  <Route path='/gallery/artist' element={<Artist />} />
                  <Route path='/gallery/craft' element={<Crafts />} />
                  <Route path='/' element={<Home />} />   
               </Routes>
            </Router>
         </div>
      );
   }
}

export default App;
