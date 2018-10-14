<template>
    <div>
        <header-component header="Big Fridge" blurb="Interview Project by Jason Eala"></header-component>
        <filter-component></filter-component>
        <br/>
        <table-component></table-component>
        <br/>
        <table-component></table-component>
        <br/>
        <table-component></table-component>
    </div>
</template>

<script>
import HeaderComponent from './components/header.vue';
import FilterComponent from './components/filter.vue';
import TableComponent from './components/table.vue';

export default {
  name: "app",
  data() {
    return {
      message: "Big Fridge"
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
