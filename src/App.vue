<template>
    <div>
        <header-component header="Big Fridge" blurb="Interview Project by Jason Eala"></header-component>
        <filter-component @submit-data="onSubmit"></filter-component>
        <br/>
        <table-component caption="Quantity By Purchase Date" :dataset="quantityByDate"></table-component>
        <br/>
        <table-component caption="Purchased After Expiration" :dataset="purchasedAfterExpiration"></table-component>
        <br/>
        <table-component caption="All Data" :dataset="allData"></table-component>
        <br/>
    </div>
</template>

<script>
import HeaderComponent from "./components/header.vue";
import FilterComponent from "./components/filter.vue";
import TableComponent from "./components/table.vue";
import Dataset from "./js/dataset";
import EventBus from "./js/eventBus";
const _ = { isNil: require("lodash/isNil"), filter: require("lodash/filter") };

const filterBy = {};

const componentData = {
  allData: Dataset.get(),
  quantityByDate: Dataset.getQuantityByDate(),
  purchasedAfterExpiration: Dataset.getPurchasedAfterExpiration()
};

export default {
  name: "app",
  components: {
    HeaderComponent,
    FilterComponent,
    TableComponent
  },
  data: () => componentData,
  mounted() {
    const self = this;
    EventBus.$on("filter", data => {
      console.log(data.name, data.input);
      filterBy[data.name] = data;
      componentData.allData = Dataset.get().filter((item) => item.name.toLowerCase().includes(data.input.toLowerCase()));
    });
  },
  watch: {
    allData: val => {
      console.log("hit me baby");
      console.log(componentData.allData.length)
      return componentData.allData;
    },
    quantityByDate: val => {
      console.log("quanityt data");
      return this.quantityByDate;
    },
    purchasedAfterExpiration: val => {
      console.log("purchased data");
      return this.purchasedAfterExpiration;
    }
  },
  methods: {
    onSubmit: function(data) {
      console.log('From On Submit');
      console.log(data);
    }
  }
};
</script>

<style>
</style>
