<template>
  <home-card>
    <template slot="header">
      <span>
        <i class="fa fa-users fa-fw"></i>
      </span>
      <span class="ml-2">Quotations</span>
    </template>
    <template slot="body">
      <div class="row">
        <ul class="list-group w-100">
          <li class="list-group-item mb-3 rounded new-calendar">
            <span class="mr-2">
              <i class="fa fa-plus-square"></i>
            </span>
            <router-link to="/quotations/new" class="calendar-name">Add New Quotation</router-link>
          </li>
          <li
            class="list-group-item mb-3 rounded"
            v-for="item in quotations"
            :key="item.quotationId"
          >
            <span class="mr-2">
              <i class="fa fa-calendar fa-fw"></i>
            </span>
            <router-link
              :to="'/quotations/'+item.quotationId+'/edit'"
              class="calendar-name"
            >Quote No: {{item.quoteNo}}</router-link>
          </li>
        </ul>
      </div>
    </template>
  </home-card>
</template>

<script>
import { getQuotations } from "@/services/quotationsService.js";
export default {
  data() {
    return {
      quotations: []
    };
  },
  mounted() {
    getQuotations()
      .then(data => (this.quotations = data))
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>