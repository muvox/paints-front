<template>
  <v-container fluid>
    <label class="test" v-for="paint in this.paints" :key="paint.id">
      <h3>{{ paint.name }}</h3>
    </label>
    <button v-on:click="paskaa">Click</button>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('landing.TITLE')} - %s`
    }
  },
  data() {
    return {
      paints: this.$store.getters.allPaints,
      dataTableLoading: true
    }
  },
  methods: {
    ...mapActions(['getAllPaints']),
    paskaa() {
      console.log(this.paints)
      console.log(this.paints.name)
    }
  },
  async mounted() {
    console.log('im here')
    await this.getAllPaints()
  }
}
</script>
