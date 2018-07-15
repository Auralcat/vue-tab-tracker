<template>
    <div>
      <v-layout>
          <v-flex xs4>
              <panel title="Song Metadata">
                  <v-text-field label="Title" v-model="title" />
                  <v-text-field label="Artist" v-model="artist" />
                  <v-text-field label="Genre" v-model="genre" />
                  <v-text-field label="Album" v-model="album" />
                  <v-text-field label="AlbumImageUrl" v-model="albumImageUrl" />
                  <v-text-field label="YoutubeId" v-model="youtubeId" />
              </panel>
          </v-flex>
          <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
              <v-text-field label="Tab" multi-line v-model="tab" />
              <v-text-field label="Lyrics" multi-line v-model="lyrics" />
            </panel>
            <v-btn class="cyan" dark @click="create">Create Song</v-btn>
          </v-flex>
      </v-layout>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data() {
    return {
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImageUrl: '',
      youtubeId: '',
      lyrics: '',
      tab: '',
    }
  },
  components: {
    Panel
  },
  methods: {
    create() {
      /* Call API */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
