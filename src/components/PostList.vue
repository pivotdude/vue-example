<template>
    <h1>Список постов</h1>
    <div>
        <transition-group name="user-list">
            <li v-for="post in posts" class="post" :key="post.id">
              {{post.id}}
                <h2 @click="$router.push(`/posts/${post.id}`)">{{post.title}}</h2>
                <p>{{post.body}}</p>
                <button @click="deletePost" :id="post.id">Удалить</button>
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        props: {
            posts: Array
        },
        methods: {
            deletePost(post) {
                this.$emit('deletePost', post.target.id)
            }
        }
    }
</script>

<style scoped>
h2 {
    cursor: pointer;
}
.post {
    border: 2px solid teal;
    margin-top: 20px;
}

.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(900px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>