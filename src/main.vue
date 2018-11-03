<template>
    <div>
        <div class='uk-section '>
            <router-view :key="$route.fullPath">
            </router-view>
        </div>

    </div>
</template>

<script lang="ts">
import { router } from "./index";
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
$global-link-color: #3b86ff;
.uk-navbar {
  background-color: $global-link-color;
  color: white;
}
.uk-navbar-nav > li.uk-active > a {
  color: white;
}
.uk-navbar-nav > li > a {
  color: #e2e2e2;
}
</style>
