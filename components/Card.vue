<template>
  <div class="card">
    <div class="card-header">
      <h1>{{ chosenFigure.numeral }}</h1>
      <span
        class="element inner"
        :class="[chosenFigure.elements.innerName]"
      >
        {{ chosenFigure.elements.inner }}
      </span>
      <span
        class="element outer"
        :class="[chosenFigure.elements.outerName]"
      >
        {{ chosenFigure.elements.outer }}
      </span>
    </div>

    <graph :lines="chosenFigure.lines" />

    <div class="card-footer">
      <h2 class="name">{{ chosenFigure.name }}</h2>
      <span class="sign">{{ chosenFigure.sign }}</span>
      <span class="planet">{{ chosenFigure.planet }}</span>
    </div>
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
  margin: 0;
}

h2 {
  letter-spacing: 2.5px;
  margin: 0;
}

.card-header {
  margin: 10px 0 20px;
}

.card-footer {
  margin: 20px 0 10px;
}

.card-header,
.card-footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.card-header .inner,
.card-footer .sign {
  order: -1;
}

.element {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  z-index: 5;
}

.element.inner {
  border: 1px solid #333;
  border-radius: 10px;
}

.element.air,
.element.earth {
  text-decoration: line-through;
}

.element.fire,
.element.air {
  line-height: 14px;
}

.element.water,
.element.earth {
  line-height: 17px;
}

</style>
