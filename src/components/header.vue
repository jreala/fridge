<template>
    <b-container fluid>
        <h1>{{header}}</h1>
        <p>{{blurb}}</p>
        <hr>
    </b-container>
</template>

<script>
export default {
  props: ["header", "blurb"]
};
</script>
