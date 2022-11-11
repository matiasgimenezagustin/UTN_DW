
import './App.css';
import Footer from './componets/Footer/Footer';
import Navbar from './componets/Navbar/Navbar';
import {Route, Routes } from "react-router-dom";
import Contenido from './componets/Contenido/Contenido';

function App() {
  

  return (
    <div className="App" >
      <Navbar tituloPagina="Store" color="green"/>
      <Routes>
        <Route path='/' element={<Contenido/>}/>
        <Route path='/red' element={ <Navbar tituloPagina="Con fondo rojo" color="red"/>}/>
      </Routes>

      {/* <Navbar tituloPagina="Con fondo rojo" color="red"/>
      <Navbar tituloPagina="Con fondo por defecto" /> */}

      <Footer gmail="icono de gmail"/>
      <Footer />
    </div>
  );
}



export default App;
