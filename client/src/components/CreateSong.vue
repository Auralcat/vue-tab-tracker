<template>
    <div>
      <v-layout>
          <v-flex xs4>
              <panel title="Song Metadata">
                  <v-text-field label="Title" v-model="song.title" required :rules="[required]" />
                  <v-text-field label="Artist" v-model="song.artist" required :rules="[required]" />
                  <v-text-field label="Genre" v-model="song.genre" required :rules="[required]" />
                  <v-text-field label="Album" v-model="song.album" required :rules="[required]" />
                  <v-text-field label="AlbumImageUrl" v-model="song.albumImageUrl" required :rules="[required]" />
                  <v-text-field label="YoutubeId" v-model="song.youtubeId" required :rules="[required]" />
              </panel>
          </v-flex>
          <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
              <v-textarea label="Tab" v-model="song.tab" required :rules="[required]" />
              <v-textarea label="Lyrics" v-model="song.lyrics" required :rules="[required]" />
            </panel>
            <div class="danger-alert" v-if="error">{{error}}</div>
            <v-btn class="cyan" dark @click="create">Create Song</v-btn>
          </v-flex>
      </v-layout>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: ''
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
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
  .danger-alert {
    color: #ff0000;
  }
</style>
