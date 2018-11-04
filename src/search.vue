<template>
    <div>
        <div class="uk-section">
            <div class='uk-container'>
                <h1>Search</h1>
                <vue-fuse :keys="keys" :list="entries" event-name="results" placeholder="Search for data"></vue-fuse>
            </div>
        </div>
        <div class="uk-section uk-section-muted">
            <div class='uk-container'>
                <vk-card v-for="entry in results" :key="entry.url" class="uk-margin-bottom">
                    <vk-card-title>{{entry.title}}</vk-card-title>
                    <p>{{entry.description}}</p>
                    <vk-label type="primary" v-for="type in entry.type" :key="type">{{type}}</vk-label>
                    <vk-label type="success" v-for="tag in entry.tags" :key="tag">{{tag}}</vk-label>
                    <div slot="footer">
                        <vk-button-link type="text" :href="entry.url">Go to data</vk-button-link>
                    </div>
                </vk-card>
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
            this.categories = response.data.categories;
            this.entries = response.data.entries;
        })

        return {
            results: [],
            categories: [],
            entries: [],
            keys: ["title", "source", "type", "tags"]
        };
    }
});

</script>

<style lang="scss" scoped>
</style>
