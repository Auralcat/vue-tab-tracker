<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form class="tab-tracker-form">
          <v-text-field class="my-input-box" label="Email" v-model="email" />
          <v-text-field class="my-input-box" label="Password" v-model="password" :type="show1 ? 'text' : 'password'" autocomplete="new-password" />
        </form>
        <div class="error" v-html="error"></div>
        <br />
        <v-btn class="cyan" @click="register" dark>Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      /* v-text-field password signal var */
      show1: false
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        console.log('Whoops!', error.response)
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
