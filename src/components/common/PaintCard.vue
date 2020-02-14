<template>
<div class="container">
  <section class="page-plans">
    <h1> Plans page </h1>
    <p class="loading" v-if="loading">loading gif</p>
    <div class="container" >
      <label class="testiRadio" v-for="plan in plans" :key="plan.id">
      <input type="radio" name="radioname" value="plan.price" checked="checked"/>
      <div class="card">
        <h2> {{plan.description}}</h2>
        <h3>Pituus {{plan.length}} kuukautta</h3>
        <h3>Hinta {{plan.price}} euroa</h3>
      </div>
    </label>
    </div>
    <!-- <div class="container">
      <article class="card" v-for="plan in plans" :key="plan.id">
        <h2>{{plan.description}}</h2>
        <span>{{plan.price}}€</span>
        <br>
        <span>Duration: {{plan.length}} Months</span>
      </article>
    </div> -->
  </section>
</div>
</template>

<script>
export default {
  name: "PaintsBox",
  data() {
    return {
      loading: true,
      plans: []
    }
  },
  created() {

  }
}
</script>


<style>
</style>
