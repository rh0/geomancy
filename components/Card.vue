<template>
  <div class="card">
    <div class="card-header">
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <h1 v-bind:key="chosenFigure.numeral">{{ chosenFigure.numeral }}</h1>
      </transition>
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <span
          class="element inner"
          v-bind:class="[chosenFigure.elements.innerName]"
          v-bind:key="chosenFigure.numeral"
        >
          {{ chosenFigure.elements.inner }}
        </span>
      </transition>
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <span
          class="element outer"
          v-bind:class="[chosenFigure.elements.outerName]"
          v-bind:key="chosenFigure.numeral"
        >
          {{ chosenFigure.elements.outer }}
        </span>
      </transition>
    </div>

    <transition
      appear
      name="custom-class-transition"
      :duration="2000"
      enter-active-class="open"
      enter-to-class="open"
      leave-active-class="close"
      mode="out-in"
    >
      <graph
        v-bind:lines="chosenFigure.lines"
        v-bind:key="chosenFigure.lines"
      />
    </transition>


    <div class="card-footer">
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <h2
          class="name"
          v-bind:key="chosenFigure.name"
        >
          {{ chosenFigure.name }}
        </h2>
      </transition>
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <span
          class="sign"
          v-bind:key="chosenFigure.name"
        >
          {{ chosenFigure.sign }}
        </span>
      </transition>
      <transition
        appear
        css
        name="fade"
        type="transition"
        mode="out-in"
      >
        <span
          class="planet"
          v-bind:key="chosenFigure.name"
        >
          {{ chosenFigure.planet }}
        </span>
      </transition>
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
    this.timer = setInterval(this.randomize, 8000)
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
/* --== Transitions ==-- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* --== General Styles ==-- */
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
