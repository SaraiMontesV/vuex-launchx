<template>
  <div class="header">
    <h1 class="title">Bienvenido a Sabor de ensueño</h1>
    <router-link to="/login"
      ><input type="button" class="button" value="Entrar como pastelero"
    /></router-link>
    <component :is="currentView" />
  </div>
  <div class="row" style="text-align: center">
    <div class="col-md-12">
      <img src="../assets/img/logo.jpg" style="width: 300px; height: 300px" />
    </div>
  </div>
  <br /><br />
  <div style="text-align: right">
    <router-link to="/order"
      ><input type="button" class="button" value="Hacer pedido"
    /></router-link>
  </div>
</template>

<style scoped>
.href {
  padding-left: 80%;
}
</style>