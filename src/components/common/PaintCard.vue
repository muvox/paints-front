<template>
  <v-card class="mx-auto" max-width="350" outlined>
    <span
      style="
            height: 100px; width: 100px; border-radius: 50%; display: inline-block;
            "
      :style="bgColor"
    >
    </span>
    <h3>{{ paint.name }}</h3>
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
