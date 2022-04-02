<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  color: #f08080;
}

.button {
  background-color: white;
  border-color: #f08080;
  border-radius: 10%;
  color: #f08080;
}
.header {
  padding-top: 2%;
  background-color: #f08080;
  color: white;
  padding-bottom: 2%;
}
.title {
  text-align: center;
}

</style>
