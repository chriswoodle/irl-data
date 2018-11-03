
<template>
    <div class='notFound'>
        <h1>404</h1>
        <p>Page not found =(</p>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang='scss' scoped>
.notFound {
  padding: 20%;
  font-size: 40px;
  h1 {
      font-size: 3em;
  }
  h1, p {
    // color: white;
  }
}
</style>