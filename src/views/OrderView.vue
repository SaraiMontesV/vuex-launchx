<template>
  <div class="header">
    <h1 class="title">Bienvenido a Sabor de ensueño</h1>
  </div>

  <div class="container">
    <div class="row" style="text-align: left">
      <div class="col-md-6">
        <br />
        <router-link class="href" to="/"
          >Volver a la pantalla principal</router-link
        >
        <br /><br /><br />
        <img src="../assets/img/logo.jpg" style="width: 300px; height: 300px" />
        <br /><br /><br />
        <img
          src="../assets/img/pastel.jpg"
          style="width: 300px; height: 300px"
        />
      </div>
      <div class="col-md-6">
        <br /><br />
        <h2 class="center">Crea tu pedido</h2>
        <br>
        <FormOrder />
      </div>
    </div>
  </div>
  <br /><br />
</template>

<script>
import FormOrder from "@/components/FormOrder.vue";
import ChooseFlavors from "@/components/ChooseFlavors.vue";
import ChooseOrnaments from "@/components/ChooseOrnaments.vue";

export default {
  name: "OrderView",
  components: {
    FormOrder,
    ChooseFlavors,
    ChooseOrnaments,
  },
};
</script>