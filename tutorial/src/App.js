import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <Navbar />
    <main className='container'>
      <Counters />
    </main>
    </React.Fragment>
  )
} 


export default App;
