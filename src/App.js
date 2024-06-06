import React from 'react';
import './App.css';
import { Home } from './screens/Home.tsx';
import { Cv } from './pages/Cv.tsx';
import { Formulaire } from './pages/Formulaire.tsx';
import { Footer } from './pages/Footer.tsx';


import {Routes, Route, NavLink } from 'react-router-dom'



function App() {
  return (
    <div className='container mt-20 '>
      <header className='mb-5'>  
      <nav className='flex justify-end'>
      <NavLink className=' mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/'>Accueil</NavLink><br></br>
      <NavLink className=' mr-3'  style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/cv'>CV</NavLink><br></br>
      <NavLink className=' mr-3'  style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })} to='/formulaire'>Formulaire</NavLink><br></br>
     

    </nav>
    
    </header>
     <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/cv' element={<Cv/>}/>
      <Route path= '/formulaire' element={<Formulaire/>}/>
     

    

      
     </Routes>
     <Footer/>
    

    </div>
  );
}

export default App;

  