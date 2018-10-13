<template>
    <div>
        <h1>{{message}}</h1>
        <filter-component></filter-component>
    </div>
</template>

<script>
import FilterComponent from './components/filter.vue';
import Dataset from './dataset.js';

export default {
  name: "app",
  data() {
    return {
      message: "Big Fridge"
    };
  },
  components: {
    FilterComponent
  }
};
</script>

<style>
</style>
