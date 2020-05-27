<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" refs="profileForm">
      <div class="form-group row">
        <label class="col-form-label col-md-2">Title</label>
        <div class="col-md-8">
          <ValidationProvider name="Title" rules="required" v-slot="{ errors }">
            <textarea class="form-control" v-model="quotationForm.title"></textarea>
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label for="Companies" class="col-form-label col-md-2">Companies</label>
        <div class="col-md-8">
          <ValidationProvider name="Companies" rules="required" v-slot="{ errors }">
            <el-select
              :loading="loadingCompanies"
              :loadingText="'Loading Companies'"
              id="companies"
              v-model="quotationForm.companyId"
              placeholder="Companies"
              filterable
            >
              <el-option
                v-for="group in companies"
                :key="group.companyId"
                :value="group.companyId"
                :label="group.name"
              ></el-option>
            </el-select>
            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
      </div>
      <!--QuotationDetail-->
      <div
        class="form-group row"
        v-for="(item,index) in quotationForm.quotationDetail"
        :key="index"
      >
        <label for class="col-md-2 col-form-label">Product</label>
        <div class="col-md-5">
          <ValidationProvider name="Products" rules="required" v-slot="{ errors }">
            <el-select
              :loading="loadingProducts"
              :loadingText="'Loading Products'"
              id="products"
              v-model="item.productId"
              placeholder="Products"
              filterable
              @change="calculateTotal()"
            >
              <el-option
                v-for="product in products"
                :key="product.productId"
                :value="product.productId"
                :label="product.name"
              ></el-option>
            </el-select>
            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="col-md-3">
          <ValidationProvider name="Quantity" rules="required|numeric" v-slot="{ errors }">
            <el-input-number :size="'small'" v-model="item.quantity" @change="calculateTotal()"></el-input-number>
            <span class="pl-2">Qty</span>
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
        <div class="col-md-2">
          <button
            class="btn btn-danger btn-icon-only"
            type="button"
            @click="removeQuotationDetail(index)"
          >
            <i class="fa fa-minus fa-fw"></i>
          </button>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-12">
          <button
            class="btn btn-success btn-icon-only"
            title="Add More"
            type="button"
            @click="addQuotationDetail()"
          >
            <i class="fa fa-plus fa-fw"></i>
          </button>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-6 offset-6">
          <table class="table table-striped">
            <tr>
              <td class="font-weight-bold">Regular Price</td>
              <td>{{ $config.currency+quotationForm.totalPrice }}</td>
            </tr>
            <tr>
              <td class="font-weight-bold">Discount</td>
              <td>
                <input
                  type="number"
                  class="small rounded"
                  @change="calculateTotal()"
                  @keyup="calculateTotal()"
                  v-model="quotationForm.totalDiscount"
                />
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold">Discounted Price</td>
              <td>{{ $config.currency+quotationForm.totalDiscountedPrice }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-primary" type="submit">
          <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
          {{quotationForm.quotationId !=null ? 'Edit' : 'Create'}}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
const languagesJson = require("@/utils/languages.json");
import { getCompanies } from "@/services/companiesService";
import { getProducts } from "@/services/productsService.js";
export default {
  name: "FormQuotation",
  props: {
    quotationForm: {
      type: Object,
      default: () => {
        return {
          companyId: null,
          title: null,
          totalPrice: 0,
          totalDiscount: 0,
          totalDiscountedPrice: 0,
          quotationDetail: [
            {
              productId: null,
              quantity: 0,
              salePrice: 0,
              normalPrice: 0
            }
          ]
        };
      }
    },
    submitting: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      languages: languagesJson,
      companies: [],
      products: [],
      loadingProducts: false,
      loadingCompanies: false
    };
  },
  methods: {
    onSubmit() {
      console.log("child here: ");
      this.$emit("update:quotationForm", this.quotationForm);
      this.$emit("onSubmit", this.quotationForm);
    },
    addQuotationDetail() {
      this.quotationForm.quotationDetail.push({
        productId: null,
        quantity: 0
      });
    },
    removeQuotationDetail(index) {
      this.quotationForm.quotationDetail.splice(index, 1);
    },
    calculateTotal() {
      this.quotationForm.totalPrice = 0;
      this.quotationForm.quotationDetail.forEach((item, index) => {
        var pId = item.productId;
        var qty = item.quantity;
        console.log(pId, qty);
        const pObj = this.products.find(element => element.productId == pId);
        if (typeof pObj != "undefined") {
          console.log(pObj.salePrice);
          this.quotationForm.totalPrice += qty * pObj.salePrice;
          this.quotationForm.totalDiscountedPrice =
            this.quotationForm.totalPrice - this.quotationForm.totalDiscount;
        }
      });
    }
  },
  mounted() {
    this.loadingProducts = this.loadingCompanies = true;
    getCompanies()
      .then(data => (this.companies = data))
      .catch(error => {
        console.log(error);
      })
      .finally(() => (this.loadingCompanies = false));
    getProducts()
      .then(data => (this.products = data))
      .catch(error => {
        console.log(error);
      })
      .finally(() => (this.loadingProducts = false));
  },
  watch: {
    quotationForm(value) {
      this.quotationForm.quotationDetail.forEach((item, index) => {});
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>