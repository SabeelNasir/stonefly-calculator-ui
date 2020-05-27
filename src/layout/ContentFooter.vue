<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-xl-between">
      <div class="col-xl-6">
        <div class="copyright text-center text-xl-left text-muted">
          &copy; {{year}}
          <a
            :href="$config.companyUrl"
            class="font-weight-bold ml-1"
            target="_blank"
          >{{$config.companyTitle}}</a>
        </div>
      </div>
      <div class="col-xl-6">
        <ul class="nav nav-footer justify-content-center justify-content-xl-end">
          <li class="nav-item">
            <a :href="$config.companyUrl" class="nav-link" target="_blank">{{$config.companyTitle}}</a>
          </li>
          <li class="nav-item">
            <a :href="$config.companyUrl" class="nav-link" target="_blank">
              About
              Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
