<template>
  <panel title="Search">
    <v-text-field label="Search by song title, artist, album or genre" v-model="search"></v-text-field>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
    data () {
      return {
        search: ''
      }
    },
    watch: {
      /* Monitor the input search string */
      search: _.debounce(async function (value) {
        const route = {
          name: 'songs'
        }
        if (this.search !== '') {
          route.query = {
            search: this.search
          }
        }
        /* Push search string to current URL address */
        this.$router.push(route)
      }, 700),
      /* If received a search string URL, put it in search field */
      '$route.query.search': {
        immediate: true,
        handler (value) {
          this.search = value
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
