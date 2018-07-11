<template>
  <v-layout column>
      <v-flex xs6 offset-xs3>
          <div class="white elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                  <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <div class="pl-4 pr-4 pt-2 pb-2">
                  <form class="tab-tracker-form">
                      <v-text-field class="my-input-box" label="Email" v-model="email" />
                      <v-text-field class="my-input-box" label="Password" v-model="password" :type="show1 ? 'text' : 'password'" autocomplete="new-password" />
                  </form>
                  <div class="error" v-html="error"></div>
                  <br>
                  <v-btn class="cyan" @click="register" dark>Register</v-btn>
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
      /* v-text-field password signal var */
      show1: false
    }
  },
  methods: {
    async register () {
      try {
        console.log(`Sending ${this.email} and ${this.password}`)
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        console.log("Whoops!", error.response)
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
