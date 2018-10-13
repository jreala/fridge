<template>
    <div>
        <h1>{{message}}</h1>
        <date-picker-component hintText="Start Date Tip"></date-picker-component>
        <date-picker-component hintText="End Date"></date-picker-component>
    </div>
</template>

<script>
import DatePickerComponent from "./components/datePicker.vue";
export default {
  name: "app",
  data() {
    return {
      message: "Big Fridge"
    };
  },
  components: {
    DatePickerComponent
  }
};
</script>

<style>
</style>
