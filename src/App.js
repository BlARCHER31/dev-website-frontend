import Home from './components/home/home'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/nav'
import Footer from './components/footer/footer'
import ProductPage from './components/products/product-page'
import Products from './components/products/product'
import './App.css'
import CartItem from './components/cart/cart-item'

function App() {
  const [cart, setCart] = useState()
  const cartInfo = {id: 5, title: 'Together', price: 35, img_url: 'https://i.imgur.com/B3Fep2I.jpg'}

  useEffect(() => {
    let storage = JSON.parse(window.localStorage.getItem('cart'))
    !storage ? setCart(null) : setCart(storage)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
    console.log('updated')
  }, [cart])

  return (
    <div>
      <NavBar cart={cart} />
      <div className='container'>
        <div className='main'>
          <Routes>
            <Route path='/cart' element={<CartItem cartInfo={cartInfo} />} />
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
