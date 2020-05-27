<template>
  <div class="container">
    <div class="col-lg-8 col-12 offset-lg-2">
      <div class="card" shadow>
        <div class="card-header">
          <div class="row">
            <div class="col-2">
              <router-link to="/" class="ni ni-fat-remove ni-2x text-theme"></router-link>
            </div>
            <div class="text-center col-8">
              <h2 class="text-fern">Create a New Product</h2>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form-product
            v-on:onSubmit="onSubmit"
            :productForm.sync="productForm"
            :submitting.sync="submitting"
          ></form-product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveProduct } from "@/services/productsService";
import FormProduct from "@/components/Products/FormProduct";
export default {
  name: "NewProduct",
  components: {
    FormProduct
  },
  data() {
    return {
      productForm: {
        name: null,
        salePrice: null,
        normalPrice: null,
        imageName: null
      },
      loading: true,
      submitting: false
    };
  },
  methods: {
    onSubmit(data) {
      console.log(this.productForm);
      this.submitting = true;
      saveProduct(this.productForm)
        .then(() => {
          this.$message({
            message: `${this.productForm.name} Saved`,
            type: "success"
          });
          this.$router.push({ path: "/" });
        })
        .finally(() => {
          this.submitting = false;
        });
    }
  }
};
</script>

<style scoped>
</style>