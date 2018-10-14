<template>
    <div>
        <header-component header="Big Fridge" blurb="Interview Project by Jason Eala"></header-component>
        <filter-component></filter-component>
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

export default {
  name: "app",
  data() {
    return {
      message: "Big Fridge",
      allData: Dataset.get(),
      quantityByDate: Dataset.getQuantityByDate(),
      purchasedAfterExpiration: Dataset.getPurchasedAfterExpiration()
    };
  },
  components: {
    HeaderComponent,
    FilterComponent,
    TableComponent
  }
};
</script>

<style>
</style>
