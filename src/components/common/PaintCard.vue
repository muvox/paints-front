<template>
  <v-card class="mx-auto" outlined max-width="350">
    <!-- <span
      class="white--text headline"
      style="height: 100px; width: 100px; border-radius: 50%; display: inline-block;"
      :style="bgColor"
    >
    </span> -->
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">
          {{ paint.name }}</v-list-item-title
        >
        <v-list-item-subtitle>
          Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-avatar tile size="80" color="{bgColor}"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'PaintCard',
  props: {
    paint: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      bgColor: `backgroundColor: ${this.paint.colorId}`
    }
  }
}
</script>
