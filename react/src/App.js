
import './App.css';
import Footer from './componets/Footer/Footer';
import Navbar from './componets/Navbar/Navbar';

function App() {
  
  


  return (
    <div className="App">
      <Navbar tituloPagina="Store" color="green"/>
      <Navbar tituloPagina="Con fondo rojo" color="red"/>
      <Navbar tituloPagina="Con fondo por defecto" />

      <Footer gmail="icono de gmail"/>
      <Footer />
    </div>
  );
}



export default App;
