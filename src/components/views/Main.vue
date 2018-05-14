<template>
  <div class="container-fluid">
    <router-view id='roterView'/>
  </div>
</template>   

<script>
export default {
  name: 'Main',
  data (router) {
    return {
    }
  }
}
</script>
<style>
  #roterView {
    margin-top: 60px;
  }
</style>    