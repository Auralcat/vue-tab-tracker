<template>
  <panel title="Song Metadata">
    <div>
      {{song.title}}
      {{song.artist}}
      {{song.genre}}
    </div>
  </panel>
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
