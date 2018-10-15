<template>
    <b-container fluid>
        <b-card bg-variant="light">
            <b-form-group label='Filters' label-size='lg'>
                <b-row>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Name' type='text'></input-receiver-column-component>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Type' type='text'></input-receiver-column-component>
                </b-row>
                <b-row>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Store' type='text'></input-receiver-column-component>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Quantity' type='number'></input-receiver-column-component>
                </b-row>
                <b-row>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Purchase Date' type='date'></input-receiver-column-component>
                    <input-receiver-column-component @input-updated="onUpdateInfo" label='Expiration Date' type='date'></input-receiver-column-component>
                </b-row>
            </b-form-group>
            <b-button type="submit" variant="primary" @click="onClick">Submit</b-button>
        </b-card>
    </b-container>
</template>

<script>
import LabelColumnComponent from "./labelColumn.vue";
import InputReceiverColumnComponent from "./inputReceiverColumn.vue";

const DataToFilter = {};

export default {
  components: {
    LabelColumnComponent,
    InputReceiverColumnComponent
  },
  methods: {
    onClick() {
      this.$emit('submit-data', DataToFilter);
    },
    onUpdateInfo(data) {
      DataToFilter[data.from] = data;
    }
  }
};
</script>

<style>
</style>
