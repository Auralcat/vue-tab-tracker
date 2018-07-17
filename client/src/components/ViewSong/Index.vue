<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{ song.title  }}</div>
              <div class="song-artist">{{ song.artist }}</div>
              <div class="song-genre">{{ song.genre }}</div>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" alt="album image" :src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </panel>
      </v-flex>

      <v-layout>
        <v-flex xs6>
          <panel title="Youtube video">
            <!-- Youtube embedded -->
          </panel>
        </v-flex>

        <v-flex xs6 clas="ml-2">
          <panel title="Tabs">
            <v-textarea class="tab-area" readonly label="Tab" v-model="song.tab"></v-textarea>
          </panel>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
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
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }

  .tab-area {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
