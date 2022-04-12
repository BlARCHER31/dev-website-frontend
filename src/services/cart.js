import axios from 'axios'

/* This function will add items to local storage that will act as the cart.
    It stores the Product Information and the count the customer wants.
    The Product information will have to be retrieved for Checkout */

function addToCart(product, cart, setCart) {
	let newCart
	let newCartItem
	/* This initially checks to see if a cart exists.
      if it does not, then it will set a new cart.
      With the product and a beginning count of 1.*/
	if (!cart) {
		setCart([{ product, count: 1 }])
		/* If the cart exists, it checks to see if the 
        product is already in the cart, and then will
        increment the count of the product by 1 if it does.*/
	} else if (cart && cart.some(obj => obj.product === product)) {
		let itemIndex = cart.findIndex(x => x.product === product)
		cart[itemIndex].count += 1
		setCart(cart.slice())
	} else {
		/* This will run if the Cart exists but the product is not yet in the cart.*/
		newCartItem = [{ product, count: 1 }]
		newCart = cart.concat(newCartItem)
		setCart(newCart)
	}
}

/* This Function Will handle removing items from the cart. 
    It First Checks to see if the Item is already in the cart.
    If it is, it then subtracts from the count.
    If the count is 1 or less it removes the Item completely. */

function removeFromCart(product, cart, setCart) {
	let newCart
	let itemIndex = cart.findIndex(x => x.product === product)

	if (cart[itemIndex].count > 1) {
		cart[itemIndex].count -= 1
		setCart(cart.slice())
	} else {
		newCart = cart.filter(obj => obj.product !== product)
		setCart(newCart)
	}
}

/* This function will increase the quantity of a cart Item by one. */

function increaseProductCountByOne(product, cart, setCart) {
	let itemIndex = cart.findIndex(x => x.product === product)
	cart[itemIndex].count += 1
	setCart(cart.slice())
}

/* This Function will get the total number
    of items in the cart. */

function getCartCount(cart) {
	let count = 0
	cart.map(cartItem => (count += cartItem.count))
	return count >= 1 ? count : null
}

/* This function takes an array of product Ids and sends fetches 
    from MySql database to get product information.*/

async function getCartItems(productIds) {
	try {
		let response = await axios.get(
			'http://localhost:5000/api/products/cart-items/',
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

/* This function will calculate the total price for the cart. */

function calculateCartTotal(cart) {
	let cartTotal = 0
	cart.map(cartItem => {
		cartTotal += cartItem.product.price * cartItem.count
	})

	return cartTotal
}

export default {
	addToCart,
	removeFromCart,
	getCartItems,
	increaseProductCountByOne,
	getCartCount,
	calculateCartTotal,
}
