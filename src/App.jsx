import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'


function App() {


  return (
    <>
      <div className="header">

        <Header titulo="Adopta un perrito" />

      </div>

      <div className="galeria cards-container">
        <Cards
          image="https://placedog.net/1000/563?id=5"
          nombre="Pedro"
          desc="Cariñoso y con mucha energía"
          color="dark"
          texto="Adoptame"


        />

        <Cards
          image="https://placedog.net/1000/563?id=6"
          nombre="Perrufo"
          desc="Soy muy tierno y fiel"
          color="dark"
          texto="Adoptame"


        />

        <Cards
          image="https://placedog.net/1000/563?id=3"
          nombre="Lucas"
          desc="Un gran compañero y muy divertido"
          color="dark"
          texto="Adoptame"


        />

        <Cards
          image="https://placedog.net/1000/563?id=8"
          nombre="Simone"
          desc="Soy muy juguetona"
          color="dark"
          texto="Adoptame"

        />
      </div>
      <div className="footer">
        <Footer />

      </div>
    </>
  )
}

export default App
