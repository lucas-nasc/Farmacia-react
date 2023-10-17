import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import Itens from './components/itens/Itens'

function App() {
  return (
    <>
          <Navbar />
          <Home />
          <Footer />
    </>
  );
}
export default App;