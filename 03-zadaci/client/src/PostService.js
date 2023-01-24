import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  saveItem(item) {
    return api.post('/saveItem', { data: { item } })
  },
  getBrand(brand) {
    return api.get(`/getBrand?brand=${brand}`)
  },
  getItemById(id) {
    return api.get(`/getItemById?id=${id}`)
  },
  updateItemPrice(id, price) {
    return api.patch(`/updateItemPrice?id=${id}`, { newPrice: price })
  }
}