<template>
  <v-container>
    <v-row
      v-for="paints in this.chunkedPaints"
      :key="paints.index"
      align="start"
      justify="start"
    >
      <v-col cols="3" v-for="paint in paints" :key="paint.id" justify="center">
        <PaintCard :paint="paint" :key="paint.id"></PaintCard>
      </v-col>
    </v-row>
    <!-- <button v-on:click="paskaa">Click</button> -->
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
      chunkedPaints: []
    }
  },
  methods: {
    ...mapActions(['getAllPaints']),
    paskaa() {
      console.log(this.chunkedPaints)
    },
    chunkPaints(array) {
      return this._.chunk(array, 4)
    }
  },
  async mounted() {
    await this.getAllPaints()
    this.paints = this.$store.getters.allPaints
    this.chunkedPaints = this.chunkPaints(this.paints)
  },
  components: {
    PaintCard
  },
  props: {
    paint: Object
  }
}
</script>
