<template>
  <v-card class="mx-auto" outlined max-width="350">
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="80"
        :style="bgColor"
        style="border-radius: 50%;"
      ></v-list-item-avatar>
      <v-list-item-content align="end">
        <v-list-item-title
          class="headline mb-2"
          v-text="paint.name"
        ></v-list-item-title>
        <v-list-item-subtitle>Vallejo</v-list-item-subtitle>
        <v-divider dark></v-divider>
        <span class="grey--text text--lighten-2 caption mr-2">
          ( 7 reviews )
        </span>
        <v-rating
          v-model="rating"
          background-color="white"
          color="yellow accent-4"
          dense
          half-increments
          hover
          size="18"
        ></v-rating>
      </v-list-item-content>
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
      bgColor: `backgroundColor: ${this.paint.colorId}`,
      rating: 4.1
    }
  }
}
</script>
