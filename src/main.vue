<template>
    <div>
        <nav class="uk-navbar uk-navbar-container">
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <router-link tag="li" to="/">
                        <a>Open Data</a>
                    </router-link>
                    <router-link tag="li" to="/search">
                        <a>Search</a>
                    </router-link>
                </ul>
            </div>
        </nav>
        <!-- <div class="tm-sidebar-left uk-visible">
        </div> -->

        <div class="tm-main">
            <div class="section">
                <router-view :key="$route.fullPath">
                </router-view>
            </div>
        </div>
        <div class="uk-section uk-section-secondary uk-light">
            <div class="uk-container">
                <div>
                    <p>© 2018</p>
                </div>
                <div>
                    <p>Built at <b><a href='http://hacktheirl.com/'>HackTheIRL2018</a></b>, Melbourne FL</p>
                </div>
                <div>
                    <a href='https://github.com/chriswoodle/irl-data'>
                        <vk-icon icon="github"></vk-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { router } from "./index";
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.uk-navbar {
  background-color: #222222;
  //   color: white;
}
.uk-navbar-nav > li.uk-active > a {
  //   color: white;
}
.uk-navbar-nav > li > a {
  //   color: #e2e2e2;
}

.tm-sidebar-left {
  position: fixed;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 240px !important;
  padding: 40px 40px 60px 40px;
  color: white;
  overflow: auto;
  //   background-color: #292B2E;
  //   border-right: 1px lighten(#292B2E, 5%) solid;

  background-color: #ffffff;
  //   border-right: 1px #e5e5e5 solid;
}
</style>
