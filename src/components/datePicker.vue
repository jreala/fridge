<template>
    <div>
        <label>{{ label }}</label>
        <datepicker :placeholder="hintText"></datepicker>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  props: {
    label: String,
    hintText: String
  },
  components: {
    Datepicker
  }
};
</script>
