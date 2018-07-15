<template>
    <div>
      <v-layout>
          <v-flex xs4>
              <panel title="Song Metadata">
                  <v-text-field label="Title" v-model="song.title" />
                  <v-text-field label="Artist" v-model="song.artist" />
                  <v-text-field label="Genre" v-model="song.genre" />
                  <v-text-field label="Album" v-model="song.album" />
                  <v-text-field label="AlbumImageUrl" v-model="song.albumImageUrl" />
                  <v-text-field label="YoutubeId" v-model="song.youtubeId" />
              </panel>
          </v-flex>
          <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
              <v-textarea label="Tab" v-model="song.tab" />
              <v-textarea label="Lyrics" v-model="song.lyrics" />
            </panel>
            <v-btn class="cyan" dark @click="create">Create Song</v-btn>
          </v-flex>
      </v-layout>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data() {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: '',
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      /* Call API */
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
