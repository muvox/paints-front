<template>
  <v-card class="mx-auto" outlined max-width="350">
    <v-row no-gutters>
      <v-col cols="4">
        <v-list-item-avatar
          elevation="-10"
          size="80"
          :style="bgColor"
          style="border-radius: 50%;"
          class="ma-2"
        ></v-list-item-avatar>
      </v-col>
      <v-col cols="8" justify="end" align="end">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="title mb-1">{{
              paint.name
            }}</v-list-item-title>
            <v-list-item-subtitle>Vallejo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-divider class="my-1" dark></v-divider>
    <v-row no-gutters>
      <v-col>
        <v-btn class="ma-2"> Details </v-btn>
      </v-col>
      <v-col align="end">
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
      </v-col>
    </v-row>
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
