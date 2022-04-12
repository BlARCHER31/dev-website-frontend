const axios = require('axios')
const baseURL = 'https://dev-ecommerce.glitch.me/'

async function getCustomBoardProduct() {
  let customProduct

  try {
    customProduct = await axios.get(`${baseURL}/api/products/custom`)
    return customProduct
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCustomBoardProduct,
}
