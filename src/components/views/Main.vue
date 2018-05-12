<template>
  <div>
    <NavBar/>
    <router-view id='roterView'/>
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">Juanne</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>   

<script>
export default {
  name: 'Main',
  data (router) {
    return {
    }
  },
  computed: {
    year () {
      let y = new Date()
      return y.getFullYear()
    }
  }
}
</script>
<style>
  #roterView {
    margin-top: 60px;
  }
</style>    