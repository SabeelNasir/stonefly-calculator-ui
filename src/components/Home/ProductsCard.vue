<template>
  <home-card>
    <template slot="header">
      <span>
        <i class="fa fa-users fa-fw"></i>
      </span>
      <span class="ml-2">Products</span>
    </template>
    <template slot="body">
      <div class="row">
        <ul class="list-group w-100">
          <li class="list-group-item mb-3 rounded new-calendar">
            <span class="mr-2">
              <i class="fa fa-plus-square"></i>
            </span>
            <router-link to="/products/new" class="calendar-name">Add New Product</router-link>
          </li>
          <li class="list-group-item mb-3 rounded" v-for="item in products" :key="item.productId">
            <span class="mr-2">
              <i class="fa fa-calendar fa-fw"></i>
            </span>
            <router-link
              :to="'/products/'+item.productId+'/edit'"
              class="calendar-name"
            >{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </template>
  </home-card>
</template>

<script>
import { getProducts } from "@/services/productsService.js";
export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    getProducts()
      .then(data => (this.products = data))
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>