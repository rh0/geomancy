<template>
  <div class="graph">
    <div class="line" v-for="line in lines">
      <eye v-for="index in (line + 1)" :key="index" v-bind:class="eyeState" />
    </div>
  </div>
</template>

<script>
import Eye from '~/components/Eye.vue'

export default {
  components: {
    Eye
  },
  props: {
    lines: Array
  },
  data: function () {
    return {
      eyeState: 'open'
    }
  }
}
</script>

<style>
.graph {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.line {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  margin-bottom: -20px;
}
</style>
