<template>
  <div class="container">
    <div class="col-lg-10 col-12 offset-lg-1">
      <div class="card" shadow>
        <div class="card-header">
          <div class="row">
            <div class="col-2">
              <router-link to="/" class="ni ni-fat-remove ni-2x text-theme"></router-link>
            </div>
            <div class="text-center col-8">
              <h2 class="text-fern">Create a New Quotation</h2>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form-quotation
            v-on:onSubmit="onSubmit"
            :quotationForm.sync="quotationForm"
            :submitting.sync="submitting"
          ></form-quotation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { saveQuotation } from "@/services/quotationsService";
import FormQuotation from "@/components/Quotations/FormQuotation";
export default {
  name: "NewQuotation",
  components: {
    FormQuotation
  },
  data() {
    return {
      quotationForm: {
        companyId: null,
        title: null,
        totalPrice: null,
        totalDiscount: null,
        totalDiscountedPrice: null,
        quotationDetail: [
          {
            productId: null,
            quantity: 0
          }
        ]
      },
      loading: true,
      submitting: false
    };
  },
  methods: {
    onSubmit(data) {
      this.submitting = true;
      saveQuotation(this.quotationForm)
        .then(() => {
          this.$message({
            message: `${this.quotationForm.title} Saved`,
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