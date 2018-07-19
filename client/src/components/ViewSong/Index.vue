<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-layout>
        <v-flex xs6>
          <panel title="Youtube video">
            <you-tube :youtubeId="song.youtubeId" />
          </panel>
        </v-flex>

        <v-flex xs6 clas="mt-2 ml-2">
          <tab :song="song" />
        </v-flex>

        <v-flex xs6 clas="mt-2 ml-2">
          <lyrics :song="song" />
        </v-flex>

      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
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
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
