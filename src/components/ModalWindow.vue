<template>
    <div @click="hide()" ref="MyRef" class="modal">
        <div class="window">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                status: 'flex',
                MyRef: '',
            }
        },
        methods : {
            hide() {
                this.$refs.MyRef.style.display = 'none'
            }
        }
    }
</script>

<style scoped>
    .modal {
        top: 0;
        left: 0;
        justify-content: center;
        position: absolute;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: #00000060;
    }
    .window {
        margin: 0 auto;
        background: #fff;
        width: 50%;
        height: 20%;
    }
</style>