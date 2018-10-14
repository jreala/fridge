<template>
    <b-form-group horizontal label="Jump To">
        <b-form-input 
            type="number" 
            v-on:input="$emit('page-changed', page)" 
            v-model.number="page" 
            placeholder='Page...'
        >
        </b-form-input>
    </b-form-group>
</template>

<script>
export default {
    props: ['currentPage'],
    data() {
        return {
            page: this.currentPage
        }
    },
    watch: {
        currentPage(page) {
            this.page = page;
        }
    }
};
</script>