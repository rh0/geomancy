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
      cards: [
        {
          name: 'Puer',
          numeral: 'I',
          lines: [0,0,1,0],
          sign: '♈︎',
          planet: '♂︎',
          elements: {
            inner: '',
            outer: ''
          }
        },
        {
          name: 'Amissio',
          numeral: 'II',
          lines: [0,1,0,1],
          sign: '♉︎',
          planet: '♀︎'
        },
        {
          name: 'Albus',
          numeral: 'III',
          lines: [1,1,0,1],
          sign: '♊︎',
          planet: '☿'
        },
        {
          name: 'Populus',
          numeral: 'IV',
          lines: [1,1,1,1],
          sign: '♋︎',
          planet: '☽'
        },
        {
          name: 'Fortuna Major',
          numeral: 'V',
          lines: [1,1,0,0],
          sign: '♌︎',
          planet: '☉'
        },
        {
          name: 'Conjunctio',
          numeral: 'VI',
          lines: [1,0,0,1],
          sign: '♍︎',
          planet: '☿'
        },
        {
          name: 'Puella',
          numeral: 'VII',
          lines: [0,1,0,0],
          sign: '♎︎',
          planet: '♀︎'
        },
        {
          name: 'Rubeus',
          numeral: 'VIII',
          lines: [1,0,1,1],
          sign: '♏︎',
          planet: '♂︎'
        },
        {
          name: 'Acquisitio',
          numeral: 'IX',
          lines: [1,0,1,0],
          sign: '♐︎',
          planet: '♃'
        },
        {
          name: 'Carcer',
          numeral: 'X',
          lines: [0,1,1,0],
          sign: '♑︎',
          planet: '♄'
        },
        {
          name: 'Tristitia',
          numeral: 'XI',
          lines: [1,1,1,0],
          sign: '♒︎',
          planet: '♄'
        },
        {
          name: 'Lætitia',
          numeral: 'XII',
          lines: [0,1,1,1],
          sign: '♓︎',
          planet: '♃'
        },
        {
          name: 'Cauda Draconis',
          numeral: 'XIII',
          lines: [0,0,0,1],
          sign: '☋',
          planet: '♄♂︎'
        },
        {
          name: 'Caput Draconis',
          numeral: 'XIV',
          lines: [1,0,0,0],
          sign: '☊',
          planet: '♃♀︎'
        },
        {
          name: 'Fortuna Minor',
          numeral: 'XV',
          lines: [0,0,1,1],
          sign: '♌︎',
          planet: '☉'
        },
        {
          name: 'Via',
          numeral: 'XVI',
          lines: [0,0,0,0],
          sign: '♋︎',
          planet: '☽'
        },
      ],
      timer: ''
    }
  },
  created: function () {
    this.randomize()
    this.timer = setInterval(this.randomize, 9000)
  },
  methods: {
    randomize () {
      this.chosenFigure = this.cards[Math.floor(Math.random() * Math.floor(16))]
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
