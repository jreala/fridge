<template>
    <b-col :cols="cols">
        <b-form-input v-model.trim='input' :type='type'></b-form-input>
    </b-col>
</template>

<script>
export default {
  props: ['type', 'cols'],
  data() {
    return {
      input: ''
    }
  }
};
</script>

<style>
</style>
