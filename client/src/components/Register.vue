<template>
  <div>
    <h1>Register</h1>
    <input name="email" type="email" value="" v-model="email" placeholder="email"/>
    <br>
    <input name="password" type="password" value="" v-model="password" placeholder="password"/>
    <br>
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
