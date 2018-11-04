<template>
    <div>
        <div class='uk-container'>
            <div class="uk-section">
                <h1>Search!</h1>
                <vue-fuse :keys="keys" :list="bikes" event-name="results" placeholder="Search for bikes"></vue-fuse>
                <div v-for="bike in results" :key="bike.model.name + bike.model.id">
                    {{bike}}
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue";

import VueFuse from './components/VueFuse.vue'

import axios from "axios";

const ax = axios.create({
    //   baseURL: '/data'
})

export default Vue.extend({
    components: {
        VueFuse
    },
    created() {
        this.$on('results', results => {
            this.results = results
        })
    },
    data: function (this: any) {
        ax.get('data.json').then(response => {
            console.log(response);
            this.bikes = response.data.data;
        })

        return {
            results: [],
            bikes: [],
            keys: ["brand", "model.name", "model.id"]
        };
    }
});

</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
