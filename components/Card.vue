<template>
  <div class="card">
    <h1>{{ chosenFigure.numeral }}</h1>
    <span class="sign">{{ chosenFigure.sign }}</span>
    <span class="planet">{{ chosenFigure.planet }}</span>
    <graph :lines="chosenFigure.lines" />
    <h2>{{ chosenFigure.name }}</h2>
  </div>
</template>

<script>
import Graph from '~/components/Graph.vue'

export default {
  components: {
    Graph
  },
  data: function () {
    return {
      chosenFigure: {},
      timer: ''
    }
  },
  created: function () {
    this.randomize()
    this.timer = setInterval(this.randomize, 9000)
  },
  methods: {
    randomize () {
      this.chosenFigure = this.$store.state.cards[Math.floor(Math.random() * Math.floor(16))]
    }
  },
  beforeDestroy: function () {
    clearInterval(this.timer)
  }
}
</script>

<style>
h1, h2 {
  position: relative;
  text-align: center;
  z-index: 5;
  text-transform: uppercase;
  font-weight: 200;
}

h1 {
  letter-spacing: -3px;
}

h2 {
  letter-spacing: 2.5px;
}
</style>
