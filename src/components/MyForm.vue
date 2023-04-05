<template>
    <form @submit.prevent="sendForm">
        <my-input v-model="post.title" id="" />
        <my-input v-model="post.body" id="" />
        <input type="submit" name="" id="">
    </form>
</template>

<script>
    export default {
      name: 'my-form',
        data() {
            return {
                post: {
                    id: null,
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            sendForm () {
                this.post.id = Date.now()
                console.log(this.post)
                this.$emit('newPost', this.post)
                this.post = {
                    id: null,
                    title: '',
                    body: ''
                }
            }
        }
    }
</script>

<style>


</style>