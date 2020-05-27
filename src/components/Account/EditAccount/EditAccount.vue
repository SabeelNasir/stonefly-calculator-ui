<template>
  <div class="card col-12">
    <div class="card-header text-center">Account Settings</div>
    <div class="card-body">
      <tabs fill class="flex-column flex-md-row">
        <card shadow>
          <tab-pane>
            <span slot="title">
              <i class="ni ni-single-02"></i>
              Profile
            </span>
            <profile></profile>
          </tab-pane>
          <tab-pane>
            <span slot="title">
              <i class="ni ni-single-02"></i>
              Password
            </span>
            <password />
          </tab-pane>
          <tab-pane>
            <span slot="title">
              <i class="ni ni-single-02"></i>
              Notifications
            </span>
            <notifications />
          </tab-pane>
          <tab-pane>
            <span slot="title">
              <i class="ni ni-single-02"></i>
              Apps
            </span>
            <profile></profile>
          </tab-pane>
        </card>
      </tabs>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Account/EditAccount/Profile";
import Password from "@/components/Account/EditAccount/Password";
import Notifications from "@/components/Account/EditAccount/Notifications";
export default {
  name: "EditAccount",
  components: {
    Profile,
    Password,
    Notifications
  }
};
</script>

<style>
</style>