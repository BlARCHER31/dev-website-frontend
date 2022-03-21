const axios = require('axios')

/* This will fetch all products */
async function getAllProducts() {
  let products

  try {
    products = await axios.get(`http://localhost:5000/api/products`)
    return products
  } catch (error) {
    console.log(error)
  }
}

/* This will fetch any product with the featured BOOLEAN set to true */
async function getFeaturedProducts() {
  let featuredProducts

  try {
    featuredProducts = await axios.get(
      'http://localhost:5000/api/products/featured'
    )
    return featuredProducts
  } catch (error) {
    console.log(error.message)
  }
}
/* This will fetch specific products */
async function getProduct(id) {
  let product

  try {
    product = await axios.get(`http://localhost:5000/api/products/${id}`)
    return product
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  getFeaturedProducts,
  getProduct,
  getAllProducts,
}
