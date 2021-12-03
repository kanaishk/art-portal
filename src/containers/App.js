import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Home from '../pages/Home/Home';
import Gallery from '../pages/Gallery/Gallery';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
   render() {
      return (
         <div className='App'>
            <Navigation />
            <Router>
               <Routes>
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/' element={<Home />} />   
               </Routes>
            </Router>
         </div>
      );
   }
}

export default App;
