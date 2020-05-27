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
              <h2 class="text-fern">Edit Company</h2>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form-company
            v-on:onSubmit="onSubmit"
            :companyForm.sync="companyForm"
            :submitting.sync="submitting"
          ></form-company>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateCompany, getCompany } from "../../services/companiesService";
import FormCompany from "@/components/Companies/FormCompany";
export default {
  name: "EditProduct",
  components: {
    FormCompany
  },
  data() {
    return {
      companyForm: {
        name: null,
        email: null,
        address: null,
        contactNo: null,
        contactName: null
      },
      loading: true,
      submitting: false
    };
  },
  mounted() {
    this.loading = true;
    getCompany(this.$route.params.id)
      .then(data => {
        this.companyForm = data;
        this.loading = false;
      })
      .catch(error => {
        console.log("errorrr : " + error);
        this.loading = false;
      });
  },
  methods: {
    onSubmit(data) {
      console.log(this.companyForm);
      this.submitting = true;
      updateCompany(this.companyForm.companyId, this.companyForm)
        .then(() => {
          this.$message({
            message: `${this.companyForm.name} Updated`,
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