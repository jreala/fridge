<template>
    <div>
        <h1>{{message}}</h1>
        <filter-component></filter-component>
        <table-component></table-component>
    </div>
</template>

<script>
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
    FilterComponent,
    TableComponent
  }
};
</script>

<style>
</style>
