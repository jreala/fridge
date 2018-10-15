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

const _ = {
  isNil: require("lodash/isNil"),
  filter: require("lodash/filter"),
  forEach: require("lodash/forEach")
};

const Events = {
  Name: "Name",
  Type: "Type",
  Store: "Store",
  Quantity: "Quantity",
  PurchaseDate: "Purchase Date",
  ExpirationDate: "Expiration Date"
};

export default {
  name: "app",
  components: {
    HeaderComponent,
    FilterComponent,
    TableComponent
  },
  data() {
    return {
      allData: Dataset.get(),
      quantityByDate: Dataset.getQuantityByDate(),
      purchasedAfterExpiration: Dataset.getPurchasedAfterExpiration()
    };
  },
  methods: {
    onSubmit: function(data) {
      this.quantityByDate = Dataset.getQuantityByDate();
      this.purchasedAfterExpiration = Dataset.getPurchasedAfterExpiration();
      this.allData = Dataset.get();

      _.forEach(data, value => {
        if (value.data.length === 0) {
          return;
        }

        switch (value.from) {
          case Events.Name:
            this.quantityByDate = this.quantityByDate.filter(item =>
              item.name.toLowerCase().includes(value.data.toLowerCase())
            );
            this.purchasedAfterExpiration = this.purchasedAfterExpiration.filter(
              item => item.name.toLowerCase().includes(value.data.toLowerCase())
            );
            this.allData = this.allData.filter(item =>
              item.name.toLowerCase().includes(value.data.toLowerCase())
            );
            break;
          case Events.Type:
            this.quantityByDate = this.quantityByDate.filter(item =>
              item.type.toLowerCase().includes(value.data.toLowerCase())
            );
            this.purchasedAfterExpiration = this.purchasedAfterExpiration.filter(
              item => item.type.toLowerCase().includes(value.data.toLowerCase())
            );
            this.allData = this.allData.filter(item =>
              item.type.toLowerCase().includes(value.data.toLowerCase())
            );
            break;
          case Events.Store:
            this.quantityByDate = this.quantityByDate.filter(item =>
              item.store.toLowerCase().includes(value.data.toLowerCase())
            );
            this.purchasedAfterExpiration = this.purchasedAfterExpiration.filter(
              item =>
                item.store.toLowerCase().includes(value.data.toLowerCase())
            );
            this.allData = this.allData.filter(item =>
              item.store.toLowerCase().includes(value.data.toLowerCase())
            );
            break;
          case Events.Quantity:
            break;
          case Events.PurchaseDate:
            break;
          case Events.ExpirationDate:
            break;
          default:
            break;
        }
      });
    }
  }
};
</script>

<style>
</style>
