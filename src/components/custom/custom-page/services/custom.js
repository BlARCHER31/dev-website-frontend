const axios = require('axios')

async function getCustomBoardProduct() {
  let customProduct

  try {
    customProduct = await axios.get('http://localhost:5000/api/products/custom')
    return customProduct
  } catch (error) {
    console.log(error)
  }
}

export default {
  getCustomBoardProduct,
}
