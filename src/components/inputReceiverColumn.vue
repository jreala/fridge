<template>
    <b-col>
        <b-form-input v-model.trim='input' :type='type'></b-form-input>
    </b-col>
</template>

<script>
export default {
  props: ['type'],
  data() {
    return {
      input: ''
    }
  }
};
</script>

<style>
</style>
