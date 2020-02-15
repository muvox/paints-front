<template>
  <v-container fluid>
    <b-row v-for="paints in this.chunkedPaints" :key="paints.index">
      <b-col v-for="paint in paints" :key="paint.name">
        <PaintCard v-bind:paint="paint" :key="paint.id"></PaintCard>
      </b-col>
    </b-row>
    <button v-on:click="paskaa">Click</button>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import PaintCard from './common/PaintCard.vue'
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
      dataTableLoading: true,
      chunkedPaints: []
    }
  },
  methods: {
    ...mapActions(['getAllPaints']),
    paskaa() {
      console.log(this.paints)
      console.log(this.chunkedPaints)
      console.log('done')
    }
  },
  async created() {
    console.log('im here')
    await this.getAllPaints()
    this.chunkedPaints = this._.chunk(this.paints, 4)
  },
  components: {
    PaintCard
  }
}
</script>
