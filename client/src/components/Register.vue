<template>
  <div>
    <h1>Register</h1>
    <input name="email" type="email" value="" v-model="email" placeholder="email"/>
    <br>
    <input name="password" type="password" value="" v-model="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
