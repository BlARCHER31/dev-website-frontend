const axios = require('axios')

const baseURL = 'https://dev-ecommerce.glitch.me/'

/* This will fetch all products */
async function getAllProducts() {
  let products

  try {
    products = await axios.get(`${baseURL}api/products`)
    return products
  } catch (error) {
    console.log(error)
  }
}

/* This will fetch all products in a specific category */
async function getProductsInGenre(genreID) {
  let products

  try {
    products = await axios.get(`${baseURL}api/products/categories/${genreID}`)
    return products
  } catch (error) {
    console.log(error)
  }
}

/* This will fetch any product with the featured BOOLEAN set to true */
async function getFeaturedProducts() {
  let featuredProducts

  try {
    featuredProducts = await axios.get(`${baseURL}api/products/featured`)
    return featuredProducts
  } catch (error) {
    console.log(error.message)
  }
}
/* This will fetch specific products */
async function getProduct(id) {
  let product

  try {
    product = await axios.get(`${baseURL}api/products/product/${id}`)
    return product
  } catch (error) {
    console.log(error.message)
  }
}

/*This Function Will GET ALL categories. It returns the Category Name and IMG URL. */
async function getCollections() {
  try {
    let response = await axios.get(`${baseURL}api/products/categories/`)

    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export default {
  getFeaturedProducts,
  getProduct,
  getAllProducts,
  getProductsInGenre,
  getCollections,
}
