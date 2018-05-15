<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="https://github.com/juannenna/mtg-db"><i class="fab fa-github mr-sm-2"></i>Juanne</a>.</strong> All rights reserved.
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
  a{
    color: #2c3e50 !important;
  }
#logo {
  margin-top: 60px;
}
.nav {
  color: white !important;
}
  body {
    height:100%;
    background-image: url("assets/bckg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
#app {
  font-family: 'Beleren'; /*a name to be used later*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
  footer {
    text-align: center;
    position:fixed;
    left:0px;
    bottom:0px;
    height:30px;
    width:100%;
  }

  /* IE 6 */
  * html #footer {
    position:absolute;
    top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight)+(ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop))+'px');
  }
@font-face {
  font-family: 'Beleren'; /*a name to be used later*/
  src: url('assets/Beleren-Bold.ttf'); /*URL to font*/
}
</style>
