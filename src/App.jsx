import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './components/Navegation/Navegation'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'

function App() {


  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <Navegation />
          <Routes>
            <Route path='/' element={<ItemListConteiner />} />
            <Route path='/categoria/:idCategoria' element={<ItemListConteiner />} />
            <Route path='/item/:idItem' element={<ItemDetailConteiner />} />
            <Route path='/cart' element={ <Cart/> } />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>



    </>
  )
}

export default App
