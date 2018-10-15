<template>
    <b-col :cols="cols">
        <b-input-group :prepend='label'>
          <b-form-input v-model.trim='input' :type='type' :input="$emit('input-updated', { from: label, data: input })"></b-form-input>
        </b-input-group>
    </b-col>
</template>

<script>
import EventBus from "../js/eventBus";

export default {
  props: ["label", "type", "cols"],
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
</style>
