<template>
  <div id="app">
    <div class="header">
      <div class="title"><h2>Candid Studio</h2></div>
      <div class="menu-container">
        <router-link to="/home">HOME</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <router-link to="/blogs">BLOGS</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </div>
    </div>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <footer>
      <div>Copyright © Candid Studio 2020 </div>
      <div>vinzdeveloper@gmail.com</div>
    </footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title > h2 {
  font-size: 28px;
  margin-top: 15px;
}
.header {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  height: 75px;
  justify-content: space-between;
  padding: 0px 10px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.menu-container {
  margin-top: 20px;
}

.menu-container  a {
  color: #000;
  font-size: 15px;
  font-weight: 400;
  margin-right: 30px;
  padding: 7px 14px;
  text-decoration: none;
}

.menu-container  a:hover {
  border: 1px solid #000;
  padding: 6px 13px;
}

.main-container {
  margin-top: 75px;
  overflow-x: hidden;
  width: 100%;
}

footer {
  background-color: #f7f7f7;
  display: flex;
  font-size: 18px;
  justify-content: space-around;
  height: 100px;
  width: 100%;
  padding-top: 50px;
}
</style>
