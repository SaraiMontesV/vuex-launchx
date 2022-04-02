<template>
  <div class="header">
    <h1 class="title">Bienvenido a Sabor de ensueño</h1>
  </div>
  <div class="container" style="text-align: center">
    <div class="row">
      <div class="col-md-12">
        <img src="../assets/img/logo.jpg" style="width: 300px; height: 300px;" />
      </div>
    </div>
    <div class="row login-card">
      <div class="col-md-12">
        <h2>Ingresa con tus datos</h2>
        <br />
        <label for="nombre">Usuario:</label><br />
        <input
          type="text"
          id="usuario"
          placeholder="Escribe tu usuario"
        /><br /><br />
        <label for="nombre">Contraseña:</label><br />
        <input
          type="password"
          id="password"
          placeholder="Ingresa tu contraseña"
        /><br /><br />
            <router-link class="href"  to="/baker"><button class="button">Iniciar sesión</button></router-link> 
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <br />
        <router-link class="href"  to="/">
       Volver a la pantalla principal</router-link>
      </div>
    </div>
  </div>
  <br />
</template>

<style scoped>
</style>