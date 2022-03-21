import Home from './components/home/home'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/nav'
import Footer from './components/footer/footer'
import ProductPage from './components/products/product-page'
import Products from './components/products/product'
import './App.css'

function App() {
  const [cart, setCart] = useState()
  const addToCart = productId => {
    let newCart
    let newCartItem
    if (!cart) {
      setCart([productId])
      console.log(cart)
    } else {
      newCartItem = [productId]
      newCart = cart.concat(newCartItem)
      setCart(newCart)
    }
    console.log(newCart)
  }

  const removeFromCart = (productId, cart) => {
    let newCart = cart.filter(id => id != productId)
    setCart(newCart)
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
      <NavBar cart={cart} addToCart={addToCart} />
      <div className='container'>
        <div className='main'>
          <Routes>
            <Route
              path='/product/:id'
              element={<ProductPage cart={cart} setCart={setCart} />}
            />
            <Route
              path='/products'
              element={<Products cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />}
            />
            <Route path='/' exact element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
