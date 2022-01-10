import React from 'react';
import {Route , Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Manali from './component/manali/Manali';
import Home from './component/Home';
import Ladakh from './component/Ladakh/ladakh';
import About from './component/About';
import NoteState from './context/notes/noteState';

function App() {
  return (
  <>
  <NoteState>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path='/manali' element={<Manali/>} exact />
      <Route path='/ladakh' element={<Ladakh/>} exact />
      <Route path="/about" element={< About/>} exact />
    </Routes>
    <Footer />
    </NoteState>
  </>
  );
}

export default App;
