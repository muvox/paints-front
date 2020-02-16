:<template>
  <v-container fluid>
    <b-row v-for="paints in this.chunkedPaints" :key="paints.index">
      <b-col v-for="paint in paints" :key="paint.id">
        <h1>{{ paint.name }}</h1>
      </b-col>
    </b-row>
    <button v-on:click="paskaa">Click</button>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
// import PaintCard from './common/PaintCard.vue'
export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('landing.TITLE')} - %s`
    }
  },
  data() {
    return {
      paints: this.$store.getters.allPaints
    }
  },
  methods: {
    ...mapActions(['getAllPaints']),
    paskaa() {
      console.log(this.chunkedPaints)
    }
  },
  async beforeCreated() {
    console.log('done')
    await this.getAllPaints()
  },
  components: {
    // PaintCard
  },
  computed: {
    chunkedPaints() {
      return this._.chunk(this.paints, 4)
      console.log('im called')
    }
  }
}
</script>
