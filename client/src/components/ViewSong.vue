<template>

</template>

<script>
  import SongsService from '@/services/SongsService'
  export default {
    async mounted () {
      const songId = this.$store.state.route.params.songId
      this.song = await SongsService.show(songId)
      console.log(song)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
