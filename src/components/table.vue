<template>
    <b-container fluid>
        <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
        <b-row>
            <b-col>
                <b-pagination :total-rows="items.length" :per-page="perPage" v-model="currentPage"></b-pagination>
            </b-col>
            <b-col cols="3">
                <jump-to @page-changed="onPageChanged" v-bind:currentPage="currentPage"></jump-to>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import LabelColumnComponent from "./labelColumn.vue";
import InputReceiverColumnComponent from "./inputReceiverColumn.vue";
import Dataset from "../js/dataset.js";
import JumpTo from "./jumpTo.vue";

const isNil = require("lodash/isNil");

export default {
  data() {
    return {
      items: Dataset.get(),
      currentPage: 1,
      perPage: 10,
      filter: null
    };
  },
  components: {
    LabelColumnComponent,
    InputReceiverColumnComponent,
    JumpTo
  },
  methods: {
      onPageChanged: function(page) {
          this.currentPage = page;
      }
  }
};
</script>

<style>
</style>
