<template>
  <v-layout column>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks/>
      <recently-viewed-songs class="mt-2" />
    </v-flex>
    <v-flex xs6>
      <songs-search-panel/>
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import SongsSearchPanel from './SongsSearchPanel'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import {mapState} from 'vuex'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    RecentlyViewedSongs,
    SongsBookmarks
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    /* Do a request to the backend for all the songs */
    this.songs = (await SongsService.index()).data
  },
  computed: {
    /* Spread operator */
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
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
