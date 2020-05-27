<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" refs="companyForm">
      <div class="form-group row">
        <label class="col-form-label col-md-3">Name</label>
        <div class="col-md-8">
          <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
            <input class="form-control" v-model="companyForm.name" />
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Email</label>
        <div class="col-md-8">
          <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
            <input class="form-control" v-model="companyForm.email" />
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Address</label>
        <div class="col-md-8">
          <ValidationProvider name="Address" rules="required" v-slot="{ errors }">
            <textarea class="form-control" v-model="companyForm.address" :rows="2"></textarea>
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Contact Name</label>
        <div class="col-md-8">
          <ValidationProvider name="Contact Name" rules="required" v-slot="{ errors }">
            <input class="form-control" v-model="companyForm.contactName" />
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Contact No</label>
        <div class="col-md-8">
          <ValidationProvider name="Contact No" rules="required" v-slot="{ errors }">
            <input class="form-control" v-model="companyForm.contactNo" />
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary" type="submit">
          <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
          {{companyForm.companyId !=null ? 'Edit' : 'Create'}}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "FormCompany",
  props: {
    companyForm: {
      type: Object,
      default: () => {
        return {
          name: null,
          email: null,
          address: null,
          contactNo: null,
          contactName: null
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
      fileList: [],
      uploadFileUrl: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("update:companyForm", this.companyForm);
      this.$emit("onSubmit", this.companyForm);
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>