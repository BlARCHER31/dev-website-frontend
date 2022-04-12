import Home from './components/home/home'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/nav/nav'
import Footer from './components/footer/footer'
import ProductPage from './components/products/product-page'
import Products from './components/products/product'
import Cart from './components/cart/cart/cart'
import './App.css'
import CustomPage from './components/custom/custom-page/custom-page'
import About from './components/about/about/about'

function App() {
	const [cart, setCart] = useState()

	useEffect(() => {
		let storage = JSON.parse(window.localStorage.getItem('cart'))
		!storage ? setCart(null) : setCart(storage)
		alert(
			'This is currently a demo Ecommerce site. At the moment none of these products are real or purchaseable.'
		)
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
							path='/about'
							element={<About />}
						/>
						<Route
							path='products/custom'
							element={<CustomPage setCart={setCart} cart={cart} />}
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
