import axios from 'axios'

/* This function will add items to local storage that will act as the cart.
    It only stores the Product Id and the count the customer wants.
    The Product information will have to be retrieved for Checkout */

function addToCart(productId, cart, setCart) {
  let newCart
  let newCartItem

  if (!cart) {
    setCart([{ productId, count: 1 }])
  } else if (cart && cart.some(obj => obj.productId === productId)) {
    let itemIndex = cart.findIndex(product => product.productId === productId)
    cart[itemIndex].count += 1
    setCart(cart.slice())
  } else {
    newCartItem = [{ productId, count: 1 }]
    newCart = cart.concat(newCartItem)
    setCart(newCart)
  }
}

/* This Function Will handle removing items from the cart. 
    It First Checks to see if the Item is already in the cart.
    If it is, it then subtracts from the count.
    If the count is 1 or less it removes the Item completely. */

function removeFromCart(productId, cart, setCart) {
  let newCart
  let itemIndex = cart.findIndex(product => product.productId === productId)
  if (cart[itemIndex].count > 1) {
    cart[itemIndex].count -= 1
    setCart(cart.slice())
  } else {
    newCart = cart.filter(obj => obj.productId !== productId)
    setCart(newCart)
  }
}

async function getCartItems(productIds) {
  try {
    let response = await axios.get(
      `http://localhost:5000/api/products/cart-items/`,
      {
        headers: {
          productIds: productIds,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  addToCart,
  removeFromCart,
  getCartItems,
}
