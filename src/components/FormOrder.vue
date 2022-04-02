<template>
  <form id="form1" method="submit" class="form">
    <label for="nombre">Nombre completo:</label><br />
    <input type="text" id="nombre" v-model="nombre" /><br /><br />
    <label for="telefono">Teléfono:</label><br />
    <input
      type="number"
      id="telefono"
      v-model="telefono"
      minlength="10"
      maxlength="10"
    /><br /><br />
    <label for="correo">Correo electrónico:</label><br />
    <input type="email" id="correo" v-model="correo" /><br /><br />
    <label for="descripcion">Descripción general del pastel:</label><br />
    <textarea id="descripcion" v-model="descripcion"></textarea><br /><br />

    <p><strong>Selecciona los sabores de tu pastel</strong></p>
    <div
      v-for="flavor in $store.state.flavors"
      :flavor="flavor"
      :key="flavor.id"
    >
        <input class="checkbox-margin" type="checkbox" v-model="orderFlavors" :value="flavor"/>
      <label for="{{flavor.id}}">{{ flavor.name }}</label
      ><br />
    </div>
    <br />
    <p><strong>Selecciona las decoraciones de tu pastel</strong></p>
    <div
      v-for="ornament in $store.state.ornaments"
      :ornament="ornament"
      :key="ornament.id"
    >
      <input class="checkbox-margin" type="checkbox" v-model="orderOrnaments" :value="ornament"/>
      <label for="{{ornament.id}}">{{ ornament.name }}</label
      ><br />
    </div>
    <br />
  </form>
  <div class="success" v-if="showDismissibleAlert">
   <p>El pedido se envío con éxito. Puede volver a la pantalla principal</p> 
  </div>

  <button
    @click="
      $store.commit('addOrder', {
        id: 1,
        name: nombre,
        phone: telefono,
        mail: correo,
        description: descripcion,
        ornaments: orderOrnaments,
        flavors: orderFlavors
      }); showDismissibleAlert=true;
    "
  >
    Agregar pedido
  </button>
</template>

<style scoped>
.success{
  background-color: green;
  color: white;
}
  .checkbox-margin{
    margin-right: 5%;
  }
</style>

<script>
export default {
  name: "FormOrder",
  data(){
    return {
      orderOrnaments: [],
      orderFlavors: [],
      showDismissibleAlert: false
    }
  }  
};
</script>

