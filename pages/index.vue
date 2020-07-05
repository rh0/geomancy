<template>
  <div id="geoshuffle">
    <card />
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style>
#geoshuffle {
  border: 2px solid #aaa;
  width: 434px;
  background: #F3F2E2;
  border-radius: 17px;
  box-shadow: 4px 4px 2px 1px #111;
  padding: 0 15px;
}
</style>
