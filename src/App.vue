<template>
  <div id="app">
    <router-view/>
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">Juanne</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    year () {
      let y = new Date()
      return y.getFullYear()
    }
  }
}
</script>

<style>
#logo {
  margin-top: 60px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/bckg.jpg");
}
</style>
