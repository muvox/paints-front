<template>
  <v-container fluid>

  </v-container>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  metaInfo() {
    return {
      title: this.$store.getters.appTitle,
      titleTemplate: `${this.$t('paint.TITLE')} - %s`
    }
  },
  data() {
  }
}
</script>
