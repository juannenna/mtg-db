<template>
  <div class="hello">
    <b-row>
      <b-col>
        <b-img :src="'http://www.mtgpics.com/pics/reg/' + card.expansion + '/' + card.collector_number + '.jpg'"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
