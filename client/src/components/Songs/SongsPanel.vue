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
        <!-- You need to add the slot attr to the outermost element -->
        <v-btn :to="{name: 'songs-create'}" absolute class="cyan accent-2" fab light medium middle right slot="action">
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">

          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{song.title}}</div>
              <div class="song-artist">{{song.artist}}</div>
              <div class="song-genre">{{song.genre}}</div>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" alt="Album Image" :src="song.albumImageUrl"/>
            </v-flex>
            <v-btn class="cyan" dark :to="{name: 'song', params: {songId: song.id}}">View Song</v-btn>
          </v-layout>

        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    /* Update panel according to search query */
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
</style>
