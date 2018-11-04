<template>
    <div>
        <div class="uk-cover-container uk-text-center">
            <img src="https://i1.wp.com/www.floridashealthinsurancenetwork.com/wp-content/uploads/2017/07/health-insurance-indian-river.jpg" alt="" uk-cover>
            <vk-card class="uk-position-center uk-width-2-3@m uk-text-left">
                <h1>Indian River Lagoon Open Data</h1>
                <h4>To help aid efforts to research and improve the Indian River Lagoon's condition, the IRL Open Data initiative provides an index of datasets involving the IRL and neighboring areas.</h4>
            </vk-card>
        </div>

        <!-- <div class="uk-grid">
            <div class="uk-width-medium-1-1 uk-row-first">
                <div class="uk-vertical-align uk-text-center" style="background: url('') 50% 0 no-repeat; height: 450px;">
                 
                    <vk-card class="uk-position-center uk-width-1-2@m uk-text-left">
                        <vk-card-title>IRL Open Data</vk-card-title>
                        <p>To help aid efforts to research and improve the Indian River Lagoon's condition, the IRL Open Data initiative provides an index of datasets involving the IRL and neighboring areas.</p>
                    </vk-card>
                </div>

            </div>
        </div> -->
        <div class="uk-section ">
            <div class="uk-container">
                <vk-grid matched class="uk-child-width-1-2@s">
                    <div>
                        <vk-card type="primary" hover>
                            <div>
                                <vk-grid gutter="small" class="uk-flex-middle">
                                    <div class="uk-width-auto">
                                        <vk-icon-button href="" icon="database"></vk-icon-button>
                                    </div>
                                    <div class="uk-width-expand">
                                        <vk-card-title class="uk-margin-remove-bottom">Datasets</vk-card-title>
                                    </div>
                                </vk-grid>
                                <p>View data collected by research organizations.</p>
                            </div>
                        </vk-card>
                    </div>
                    <div>
                      <vk-card type="primary" hover>
                            <div>
                                <vk-grid gutter="small" class="uk-flex-middle">
                                    <div class="uk-width-auto">
                                        <vk-icon-button href="" icon="cloud-upload"></vk-icon-button>
                                    </div>
                                    <div class="uk-width-expand">
                                        <vk-card-title class="uk-margin-remove-bottom">Submit</vk-card-title>
                                    </div>
                                </vk-grid>
                                <p>Add your data to the index.</p>
                            </div>
                        </vk-card>
                    </div>
                </vk-grid>

            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { host } from "./host";

import Vue from "vue";

export default Vue.extend({
    components: {},

    data: function (this: any) {
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
