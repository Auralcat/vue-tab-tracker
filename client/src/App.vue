<template>
  <div id="app">
    <v-app>
      <main>
        <Header/>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
    <!-- <img src="./assets/logo.png"> -->
    <!-- Router views are injected here -->
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .v-text-field__slot input {
    border-bottom: 1px solid #000;
  }
</style>
