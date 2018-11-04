<template>
    <div>
        <div class="uk-section">
            <div class='uk-container'>
                <div class="uk-grid">
                    <div class="uk-width-1-4">
                        <vk-nav type="primary">
                            <vk-nav-item-parent :title="splitWords(cat)" v-for="(items, cat) in categories" :key="cat">
                                <vk-nav-item :title="splitWords(item)" v-for="item in items" :key="item" @click="filterItems.includes(item) ? null: filterItems.push(item)"></vk-nav-item>
                            </vk-nav-item-parent>
                        </vk-nav>
                    </div>
                    <div class="uk-width-expand">
                        <div class='uk-container'>
                            <h1>Search</h1>
                            <vue-fuse :keys="keys" :list="entries" event-name="results" placeholder="Search for data"></vue-fuse>
                        </div>
                        <div class='uk-container uk-margin-top'>
                            <div v-for="item in filterItems" :key="item" style="margin-right: 15px; margin-bottom:5px; display:inline-block;">
                                <div>
                                    <vk-icon style="cursor:pointer;" icon="close" @click="filterItems = filterItems.filter(e => e !== item);"></vk-icon>
                                    <vk-label type="primary">{{splitWords(item)}}</vk-label>
                                </div>
                            </div>
                        </div>
                        <div class='uk-container uk-margin-top'>
                            <vk-card v-for="entry in results" :key="entry.url" class="uk-margin-bottom" v-if="filterItems.length == 0 || !!entry.type.find(e => filterItems.includes(e))">
                                <vk-card-title>{{entry.title}}</vk-card-title>
                                <p>{{entry.description}}</p>
                                <vk-label type="primary" v-for="type in entry.type" :key="type">{{splitWords(type)}}</vk-label>
                                <vk-label type="success" v-for="tag in entry.tags" :key="tag">{{splitWords(tag)}}</vk-label>
                                <div slot="footer">
                                    <vk-button-link type="text" :href="entry.url">Go to data</vk-button-link>
                                </div>
                            </vk-card>
                        </div>
                    </div>
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
            console.log('hello', results)
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
            filterItems: [],
            results: [],
            categories: [],
            entries: [],
            keys: ["title", "source", "tags"]
        };
    },
    methods: {
        splitWords: splitWords
    }
});




function splitWords(s: string) {
    // Splits a camel-case or Pascal-case variable name into individual words.
    let re, match;
    const output: any[] = [];
    // re = /[A-Z]?[a-z]+/g
    re = /([A-Za-z]?)([a-z]+)/g;

    /*
    matches example: "oneTwoThree"
    ["one", "o", "ne"]
    ["Two", "T", "wo"]
    ["Three", "T", "hree"]
    */

    match = re.exec(s);
    while (match) {
        // output.push(match.join(""));
        output.push([match[1].toUpperCase(), match[2]].join(''));
        match = re.exec(s);
    }
    // console.log(output.join(' '));
    return output.join(' ');
}
</script>

<style lang="scss" scoped>
</style>
