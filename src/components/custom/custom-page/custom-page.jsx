import React, { useState, useEffect } from 'react'
import customProductHandler from './services/custom'
import CustomImageGrid from '../custom-img-grid/custom-img-grid'
import { FiShoppingCart } from 'react-icons/fi'
import cartHandler from '../../../services/cart'
import './custom-page.css'

const CustomPage = ({ cart, setCart }) => {
  const [customProduct, setCustomProduct] = useState()
  const [boardStain, setBoardStain] = useState()
  const [price, setPrice] = useState()
  const [boardPhrase, setBoardPhrase] = useState('Your text here.')
  const [fontColor, setFontColor] = useState('rgb(255,255,255)')
  const [fontSize, setFontSize] = useState('2rem')
  const [fontFamily, setTextFontFamily] = useState(
    'Brush Script MT, Brush Script Std, cursive'
  )
  const [product, setProduct] = useState()
  useEffect(async () => {
    const result = await customProductHandler.getCustomBoardProduct()
    setCustomProduct(result.data)
    setPrice(result.data[0].price)
  }, [])

  useEffect(() => {
    setProduct({
      img_url: boardStain,
      title: boardPhrase,
      fontColor,
      fontSize,
      fontFamily,
      price,
    })
  }, [boardStain, boardPhrase, fontColor, fontSize, fontFamily])

  const handleChange = (setState, event) => {
    setState(event.target.value)
  }

  return (
    <div>
      <p className='title'>Custom Board Design</p>
      <div className='custom-page'>
        {customProduct ? (
          <CustomImageGrid
            customProduct={customProduct}
            boardPhrase={boardPhrase}
            setBoardStain={setBoardStain}
            style={{
              color: fontColor,
              fontFamily,
              fontSize,
              textAlign: 'center',
            }}
          />
        ) : null}
        {customProduct ? (
          <div className='custom-details'>
            <span>
              <h3>{customProduct[0].title}</h3>
              <p className='price'>Price : ${customProduct[0].price}</p>
              <FiShoppingCart
                className='cart-icon'
                onClick={() => cartHandler.addToCart(product, cart, setCart)}
                size={28}
              />
            </span>
            <form action='submit' className='custom-board-form'>
              <label htmlFor='wording'>Text</label>
              <input
                maxLength={35}
                type='text'
                name='wording'
                onChange={e => {
                  handleChange(setBoardPhrase, e)
                }}
              />
              <label htmlFor='text-color'>Text Color</label>
              <select
                onChange={e => {
                  handleChange(setFontColor, e)
                }}
                defaultValue={fontColor}
              >
                <option value='rgb(255,255,255)'>White</option>
                <option value='rgb(0,0,0)'>Black</option>
                <option value='rgba(4, 62, 196, 0.8)'>Blue</option>
                <option value='rgba(108, 109, 111, 0.8)'>Gray</option>
              </select>
              <label htmlFor='font-family'>Font Family</label>
              <select
                name='font-family'
                onChange={e => {
                  handleChange(setTextFontFamily, e)
                }}
                defaultValue={fontFamily}
              >
                <option value='Brush Script MT, Brush Script Std, cursive'>
                  Cursive
                </option>
                <option value='Impact, fantasy'>Fantasy</option>
                <option value='Andale Mono, monospace'>MonoSpace</option>
              </select>
              <label htmlFor='font-family'>Font Size</label>
              <select
                name='font-family'
                onChange={e => {
                  handleChange(setFontSize, e)
                }}
                defaultValue={fontSize}
              >
                <option value='1rem'>Small</option>
                <option value='2rem'>Medium</option>
                <option value='4rem'>Large</option>
              </select>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CustomPage
