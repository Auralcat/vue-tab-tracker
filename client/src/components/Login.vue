<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field class="my-input-box" label="Email" v-model="email"></v-text-field>
          <!-- Use the :type attr to define a password input -->
          <!-- Gotta fix this later -->
          <!-- :append-icon="show1 ? 'visibility_off' : 'visibility'" -->
          <v-text-field
            class="my-input-box"
            label="Password"
            v-model="password"
            :type="show1 ? 'text' : 'password'"/>
            <div class="danger-alert" v-html="error"></div>
            <br>
            <v-btn class="cyan" @click="login" dark>Login</v-btn>
        </div>
      </div>
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
      /* v-text-field password vars */
      show1: false
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        /* Send user to home view later */
      } catch (error) {
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
