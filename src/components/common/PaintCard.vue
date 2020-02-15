<template>
  <div class="card">
    <span
      style="
            height: 100px; width: 100px; border-radius: 50%; display: inline-block;
            "
      :style="bgColor"
    >
    </span>
    <h3>{{ paint.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PaintCard',
  props: 'paint',
  data() {
    return {
      bgColor: 'backgroundColor: ' + this.paint.colorId
    }
  }
}
</script>
