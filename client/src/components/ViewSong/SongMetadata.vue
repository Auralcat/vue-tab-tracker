<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">{{ song.title  }}</div>
        <div class="song-artist">{{ song.artist }}</div>
        <div class="song-genre">{{ song.genre }}</div>

        <v-btn class="cyan" dark :to="{name: 'song-edit', params () { return { songId: song.id }}}">Edit</v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn && !isBookmarked" class="cyan" dark @click="bookmark">Bookmark</v-btn>
        <v-btn v-if="$store.state.isUserLoggedIn && isBookmarked" class="cyan" dark @click="unbookmark">Unbookmark</v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" alt="album image" :src="song.albumImageUrl"/>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      isBookmarked: false
    }
  },
  props: [
    'song'
  ],
  /* Use the computed hook when you need to display more complicated logic */
  computed: {
    /* Spread operator */
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted() {
    const bookmark = (await BookmarksService.index({
      songId: 1,
      userId: 1
    })).data
    this.isBookmarked = !!bookmark
    console.log('bookmark', this.isBookmarked)
  },
  methods: {
    bookmark () {
      console.log("Bookmarked!")
    },
    unbookmark () {
      console.log("Removed from bookmarks.")
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
