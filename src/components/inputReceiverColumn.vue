<template>
    <b-col :cols="cols">
        <b-input-group :prepend='label'>
          <b-form-input v-model.trim='input' :type='type' @input="inputChanged"></b-form-input>
        </b-input-group>
    </b-col>
</template>

<script>
import EventBus from '../js/eventBus';

export default {
  props: ['label', 'type', 'cols'],
  data() {
    return {
      input: ''
    }
  },
  methods: {
    inputChanged() {
      EventBus.$emit(this.label, this.input)
    }
  }
};
</script>

<style>
</style>
