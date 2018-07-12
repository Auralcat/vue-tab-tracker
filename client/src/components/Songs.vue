<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <!-- Keeping the slot example -->
        <!-- <div slot="hello">
             <h3>Yo Yo Yo</h3>
             <p>Hey there, I'm a paragraph tag</p>
             </div>
             <div slot="bye">
             <h3>Seeya</h3>
             <p>Peace out</p>
             </div> -->
        <div v-for="song in songs" :key="song.title">
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
    data () {
      return {
        songs: null
      }
    },
    mounted () {
      /* Do a request to the backend for all the songs */
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
