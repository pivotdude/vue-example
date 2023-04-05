<template>
    <input type="text" :value="modelValue" @input="e => inputChange(e)" >
</template>

<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: String,
        },
        methods: {
            inputChange (e) {
                this.$emit('update:modelValue', e.target.value)
            }
        }
    }
</script>

<style>


</style>