<template>
  <home-card>
    <template slot="header">
      <span>
        <i class="fa fa-users fa-fw"></i>
      </span>
      <span class="ml-2">Companies</span>
    </template>
    <template slot="body">
      <div class="row">
        <ul class="list-group w-100">
          <li class="list-group-item mb-3 rounded new-calendar">
            <span class="mr-2">
              <i class="fa fa-plus-square"></i>
            </span>
            <router-link to="/companies/new" class="calendar-name">Add New Company</router-link>
          </li>
          <li class="list-group-item mb-3 rounded" v-for="item in companies" :key="item.companyId">
            <span class="mr-2">
              <i class="fa fa-calendar fa-fw"></i>
            </span>
            <router-link
              :to="'/companies/'+item.companyId+'/edit'"
              class="calendar-name"
            >{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </template>
  </home-card>
</template>

<script>
import { getCompanies } from "@/services/companiesService.js";
export default {
  data() {
    return {
      companies: []
    };
  },
  mounted() {
    getCompanies()
      .then(data => (this.companies = data))
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>