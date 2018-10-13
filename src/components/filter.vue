<template>
    <b-container fluid>
        <b-form-group>
            <b-row>
                <label-column-component label='Name'></label-column-component>
                <input-receiver-column-component type='text'></input-receiver-column-component>
                <label-column-component label='Type'></label-column-component>
                <input-receiver-column-component type='text'></input-receiver-column-component>
            </b-row>
            <b-row>
                <label-column-component label='Store'></label-column-component>
                <input-receiver-column-component type='text'></input-receiver-column-component>
                <label-column-component label='Quantity'></label-column-component>
                <input-receiver-column-component type='number'></input-receiver-column-component>
            </b-row>
            <b-row>
                <label-column-component label='Purchase Date'></label-column-component>
                <input-receiver-column-component type='date'></input-receiver-column-component>
                <label-column-component label='Expiration Date'></label-column-component>
                <input-receiver-column-component type='date'></input-receiver-column-component>
            </b-row>
        </b-form-group>
    </b-container>
</template>

<script>
import LabelColumnComponent from "./labelColumn.vue";
import InputReceiverColumnComponent from "./inputReceiverColumn.vue";
export default {
  data() {
    return {
      name: "",
      type: "",
      store: "",
      quantity: ""
    };
  },
  components: {
    LabelColumnComponent,
    InputReceiverColumnComponent
  }
};
</script>

<style>
</style>
