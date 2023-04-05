<template>
  <form @submit.prevent="sendForm">
<!--    <p v-if="$v">Ошибка</p>-->
    <input required minlength="6" maxlength="36" type="text" name="login" v-model="login" id="i1">
    <input required minlength="6" maxlength="36" type="password" name="password" v-model="password" id="i2">
    <input type="submit" value="Send">
  </form>
</template>

<script>
 export default {
   data () {
     return {
       login: '',
       password: '',
       errors: [],
     }
   },

   methods: {
     async sendForm () {
       const req = await fetch('')
       const json = await req.json()
       return json
     }
   }
 }
</script>