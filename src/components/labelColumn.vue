<template>
    <b-col :cols="cols">
        <label>{{ label }}</label>
    </b-col>
</template>

<script>
export default {
  props: ["label", "cols"]
};
</script>

<style>
</style>
