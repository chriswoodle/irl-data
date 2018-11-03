<template>
    <div>
   <h1>Hello World!</h1>
    </div>
</template>

<script lang="ts">

import { host } from "./host";

import Vue from "vue";

export default Vue.extend({
  components: {},

  data: function(this: any) {
    // Subscribe to changes
    // socket.on("message", message => {
    //   console.log(message);
    // });

    // socket.on("profile", profile => {
    //   console.log(profile);
    //   this.profile = profile;
    // });
    // socket.on("assist", assist => {
    //   console.log(assist);
    //   this.transciption.unshift(assist);
    // });

    return {
      profile: {},
      transciption: []
    };
  }
});
</script>

<style lang="scss" scoped>
.small-section {
  margin-bottom: 10px;
}

p.input {
  // color: black;
  font-size: 30px;
  margin-top: 20px;
}

.type,
.score,
.magnitude {
  font-size: 18px;
  margin-top: 2px;
  margin-bottom: 2px;

  color: #555;
  color: white;
}
</style>

<style lang="scss">
</style>
