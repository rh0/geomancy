<template>
  <div class="graph">
    <div class="line" v-for="line in lines">
      <eye v-for="index in (line + 1)" :key="index" />
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
      lines: [1,0,1,1],
      timer: ''
    }
  },
  created () {
    this.timer = setInterval(this.randomize, 10000)
  },
  methods: {
    randomize () {
      console.log('beep')
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
