<template>
    <b-container fluid>
        <b-form-group>
            <b-row>
                <label-component label='Name'></label-component>
                <input-receiver-component type='text'></input-receiver-component>
                <label-component label='Type'></label-component>
                <input-receiver-component type='text'></input-receiver-component>
            </b-row>
            <b-row>
                <label-component label='Store'></label-component>
                <input-receiver-component type='text'></input-receiver-component>
                <label-component label='Quantity'></label-component>
                <input-receiver-component type='number'></input-receiver-component>
            </b-row>
            <b-row>
                <label-component label='Purchase Date'></label-component>
                <input-receiver-component type='date'></input-receiver-component>
                <label-component label='Expiration Date'></label-component>
                <input-receiver-component type='date'></input-receiver-component>
            </b-row>
        </b-form-group>
    </b-container>
</template>

<script>
import LabelComponent from "./label.vue";
import InputReceiverComponent from "./inputReceiver.vue";
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
    LabelComponent,
    InputReceiverComponent
  }
};
</script>

<style>
</style>
