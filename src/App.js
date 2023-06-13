import './App.css';
import logo from './images/logoSinFondo.png';
import {FaFacebook,FaInstagram,FaGithub} from 'react-icons/fa';
import {useRef,useState} from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <section className='section-home'>
        <header className='header-home'>
        <NavBar></NavBar>
        </header>
        <div className='content-home'>
          <div className='textBox'>
            <h2>ORDER MASTER</h2>
            <p>
            Sistema de control de inventario para la empresa encatex.
            Esta aplicación tiene como objetivo controlar el inventario dentro de la empresa y que
            luego pueda visualizar en cualquier parte con conexión a internet el inventario en tiempo
            real y pueda hacer pedidos para eliminagir y registrar productos.
            El sistema de inventarios será un producto diseñado para ayudar a las personas a
            mejorar sus productos en stock con el fin de llevar una mejor organización interna y
            externa, siendo escalable para poder a futuro ser una aplicación móvil.
            </p>
            <a>Leer más</a>
            <div className='social-icons'>
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaGithub className='icon'/>
            </div>
          </div>
          <div className='imgBox'>
            <img src={logo} className='img-logo'/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
