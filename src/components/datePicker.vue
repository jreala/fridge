<template>
    <datepicker :placeholder="hintText"></datepicker>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
    props: {
        hintText: String
    },
    components: {
        Datepicker
    }
}
</script>
