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
  data: function () {
    return {
      lines: [],
      eyeState: 'open',
      timer: ''
    }
  },
  created () {
    this.randomize()
    this.timer = setInterval(this.randomize, 9000)
  },
  methods: {
    randomize () {
      let lineBuf = []
      for(let i=0; i<4; i++) {
        lineBuf[i] = Math.floor(Math.random() * Math.floor(2))
      }
      this.lines = lineBuf
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
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
