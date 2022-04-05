import Home from './components/home/home'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/nav'
import Footer from './components/footer/footer'
import ProductPage from './components/products/product-page'
import Products from './components/products/product'
import Cart from './components/cart/cart/cart'
import './App.css'
import CustomPage from './components/custom/custom-page/custom-page';

function App() {
  const [cart, setCart] = useState()
  const cartInfo = {
    id: 5,
    title: 'Together',
    price: 35,
    img_url: 'https://i.imgur.com/B3Fep2I.jpg',
  }

  useEffect(() => {
    let storage = JSON.parse(window.localStorage.getItem('cart'))
    !storage ? setCart(null) : setCart(storage)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <NavBar setCart={setCart} cart={cart} />
      <div className='container'>
        <div className='main'>
          <Routes>
            <Route 
              path='products/custom'
              element={<CustomPage />}
              />
            <Route
              path='products/collections/:collectionName/:collectionID'
              element={<Products />}
            />
            <Route
              path='/cart'
              element={
                <Cart setCart={setCart} cart={cart} classPrefix={'cart'} />
              }
            />
            <Route
              path='/product/:id'
              element={<ProductPage cart={cart} setCart={setCart} />}
            />
            <Route path='/products' element={<Products />} />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
