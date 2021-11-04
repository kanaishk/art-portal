import React from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';

class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar />
            <div className='App'>
               <h1>App</h1>
            </div>
         </div>
      );
   }
}

export default App;
