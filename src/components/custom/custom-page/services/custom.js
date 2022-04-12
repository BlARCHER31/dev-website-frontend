const axios = require('axios')
const url = 'dev-ecommerce.glitch.me'

async function getCustomBoardProduct() {
  let customProduct

  try {
    customProduct = await axios.get(`${url}/api/products/custom`)
    return customProduct
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCustomBoardProduct,
}
