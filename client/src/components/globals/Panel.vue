<template>
    <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action"></slot>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <!-- Define the standard slot content in the base comp,
                 customize in the comp you want to use it in.-->
            <!-- <slot name="hello">No slot content defined.</slot>
                 <slot name="bye">No slot content defined.</slot> -->
            <slot>No slot content defined.</slot>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
