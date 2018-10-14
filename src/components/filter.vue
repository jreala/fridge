<template>
    <b-container fluid>
        <b-card bg-variant="light">
            <b-form-group label='Filters' label-size='lg'>
                <b-row>
                    <input-receiver-column-component label='Name' type='text'></input-receiver-column-component>
                    <input-receiver-column-component label='Type' type='text'></input-receiver-column-component>
                </b-row>
                <b-row>
                    <input-receiver-column-component label='Store' type='text'></input-receiver-column-component>
                    <input-receiver-column-component label='Quantity' type='number'></input-receiver-column-component>
                </b-row>
                <b-row>
                    <input-receiver-column-component label='Purchase Date' type='date'></input-receiver-column-component>
                    <input-receiver-column-component label='Expiration Date' type='date'></input-receiver-column-component>
                </b-row>
            </b-form-group>
        </b-card>
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
