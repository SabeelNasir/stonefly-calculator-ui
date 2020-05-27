<template>
  <div class="col-xl-4 col-sm-12 pb-4">
    <card shadow class="overflow-auto">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </card>
  </div>
</template>

<script>
export default {
  name: "HomeCard"
};
</script>

<style scoped>
.card {
  height: 30rem;
}
.card-header {
  color: #5eae6d !important;
}
</style>