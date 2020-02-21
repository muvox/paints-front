<template>
  <v-container align="center">
    <v-row
      v-for="paints in this.chunkedPaints"
      :key="paints.index"
      align="start"
      justify="start"
      min-width="300 px"
    >
      <v-col
        cols="12"
        sm="4"
        v-for="paint in paints"
        :key="paint.id"
        justify="start"
        align="start"
      >
        <PaintCard
          @click="paintDetails(paint.id)"
          :paint="paint"
          :key="paint.id"
        ></PaintCard>
      </v-col>
    </v-row>
    <!-- <button v-on:click="paskaa">Click</button> -->
    <!-- cotainer with dividers, 1 for color ball and another for details -->
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import PaintCard from './common/PaintCard.vue'
import router from '@/router'
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
      return this._.chunk(array, 3)
    },
    paintDetails(id) {
      router.push({ name: 'Paint', params: { paintId: id } })
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
