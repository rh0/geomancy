<template>
  <div class="graph">
    <div class="line">
      <eye />
      <eye />
    </div>
    <div class="line">
      <eye />
    </div>
    <div class="line">
      <eye />
    </div>
    <div class="line">
      <eye />
      <eye />
    </div>
    <div class="line">
      <eye />
      <eye />
    </div>
  </div>
</template>

<script>
import Eye from '~/components/Eye.vue'

export default {
  components: {
    Eye
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
}
</style>
