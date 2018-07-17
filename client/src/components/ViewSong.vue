<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
        <div class="song-title">{{ song.title  }}</div>
        <div class="song-artist">{{ song.artist }}</div>
        <div class="song-genre">{{ song.genre }}</div>
        <v-btn class="cyan" @click="navigateTo({name: 'song', params: {songId: song.id}})">View</v-btn>
      </panel>
    </v-flex>
    <v-flex>
      <img class="album-image" alt="album image" :src="song.albumImageUrl"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    data () {
      return {
        song: {}
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = ( await SongsService.show(songId) ).data
      console.log(this.song)
    },
    components: {
      Panel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
