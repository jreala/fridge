<template>
    <b-col :cols="cols">
        <b-input-group :prepend='label'>
          <b-form-input v-model.trim='input' :type='type'></b-form-input>
        </b-input-group>
    </b-col>
</template>

<script>
export default {
  props: ['label', 'type', 'cols'],
  data() {
    return {
      input: ''
    }
  }
};
</script>

<style>
</style>
