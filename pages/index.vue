<template>
  <div id="geoshuffle">
    <h1>XII</h1>
    <graph />
    <h2>Something</h2>
  </div>
</template>

<script>
import Graph from '~/components/Graph.vue'

export default {
  components: {
    Graph
  }
}
</script>

<style>
#geoshuffle {
  border: 2px solid #aaa;
  background: #F3F2E2;
  border-radius: 17px;
  box-shadow: 4px 4px 2px 1px #111;
  padding: 0 15px;
}

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
