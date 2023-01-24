<template>
    <div>
      <h1>Save Item</h1>
      <form @submit.prevent="saveItem">
        <label>
          Name:
          <input type="text" v-model="item.name" />
        </label>
        <br />
        <label>
          Price:
          <input type="text" v-model="item.price" />
        </label>
        <br />
        <label>
          Brand:
          <input type="text" v-model="item.brand" />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
      <hr />
  
      <h1>Get Item by Brand</h1>
      <form @submit.prevent="getBrand">
        <label>
          Brand:
          <input type="text" v-model="brand" />
        </label>
        <br />
        <button type="submit">Get Items</button>
      </form>
      <br />
      <table v-if="items.length">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
  
      <h1>Get Item by ID</h1>
      <form @submit.prevent="getItemById">
        <label>
          ID:
          <input type="text" v-model="itemId" />
        </label>
        <br />
        <button type="submit">Get Item</button>
      </form>
      <br />
      <div v-if="item">
        <p>Name: {{ item.name }}</p>
        <p>Price: {{ item.price }}</p>
        <p>Brand: {{ item.brand }}</p>
      </div>
      <hr />
  
      <h1>Update Item Price</h1>
      <form @submit.prevent="updateItemPrice">
        <label>
          ID:
          <input type="text" v-model="itemId" />
        </label>
        <br />
        <label>
          New Price:
          <input type="text" v-model="newPrice" />
        </label>
        <br />
        <button type="submit">Update Price</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from './PostService.js'
  
  export default {
    data() {
      return {
        item: {},
        brand: '',
        items: [],
        itemId: '',
        item: null,
        newPrice: 0
      }
    },
    methods: {
      saveItem() {
        api.saveItem(this.item)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      getBrand() {
        api.getBrand(this.brand)
          .then(response => {
            this.items = response.data.data.items
          })
          .catch(error => {
            console.log(error)
          })
      },
      getItemById() {
        api.getItemById(this.itemId)
          .then(response => {
            this.item = response.data.data.item
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateItemPrice() {
        api.updateItemPrice(this.itemId, this.newPrice)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>