<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(onSubmit)" refs="productForm">
      <div class="form-group row">
        <label class="col-form-label col-md-3">Name</label>
        <div class="col-md-8">
          <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
            <textarea class="form-control" v-model="productForm.name" :rows="4"></textarea>
            <p class="text-danger">{{errors[0]}}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Normal Price</label>
        <div class="col-md-8">
          <ValidationProvider name="NormalPrice" rules="required" v-slot="{ errors }">
            <el-input-number v-model="productForm.normalPrice" :precision="2" :step="0.05"></el-input-number>
            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Sale Price</label>
        <div class="col-md-8">
          <ValidationProvider name="SalePrice" rules="required" v-slot="{ errors }">
            <el-input-number v-model="productForm.salePrice" :precision="2" :step="0.05"></el-input-number>
            <p class="text-danger">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-form-label col-md-3">Upload Image</label>
        <div class="col-md-8">
          <el-upload
            class="upload-demo"
            :action="uploadFileUrl"
            list-type="picture"
            :on-success="onFileUpload"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">Click to upload</el-button>
            <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary" type="submit">
          <i class="fa fa-spinner fa-spin" v-if="submitting"></i>
          {{productForm.productId !=null ? 'Edit' : 'Create'}}
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { getFileUrl, getUploadFileUrl } from "../../utils/CommonUtils";
export default {
  name: "FormQuotation",
  props: {
    productForm: {
      type: Object,
      default: () => {
        return {
          name: null,
          salePrice: null,
          normalPrice: null,
          imageName: null
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
      this.$emit("update:productForm", this.productForm);
      this.$emit("onSubmit", this.productForm);
    },
    onFileUpload(response, file, fileList) {
      this.productForm.imageName = response.data.fileName;
    }
  },
  created() {
    this.uploadFileUrl = getUploadFileUrl();
    console.log(this.uploadFileUrl);
  },
  watch: {
    productForm(value) {
      console.log(value);
      this.fileList.push({
        name: value.imageName,
        url: getFileUrl(value.imageName)
      });
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>