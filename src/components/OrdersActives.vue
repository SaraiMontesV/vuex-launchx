<template>
  <h2>Pedidos activos</h2>
  <hr />

   <div class="col mb-4" v-for="order in $store.state.orders" :order="order" :key="order.id" >
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">Nombre: {{order.name}}</h5>
            <p class="card-text">              
                <small>
                  Teléfono: {{order.phone}}
                <br/>
                Correo electrónico: {{order.mail}}
                </small>
              
               <br> <br> 
               Descripción: {{order.description}}
               <br><br> 
            
                Sabores elegidos:
                 <ul>
                  <li v-for="flavor in order.flavors" :key="flavor"> {{flavor.title}} - </li>
                </ul>
                Decoraciones elegidas:
                 <ul>
                  <li v-for="ornament in order.ornaments" :key="ornament">{{ornament.title}}</li>
                </ul>
                Precio Total: $ {{order.total}}.00
              </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "OrdersActive",
  
};
</script>

<style scoped>
.items {
  text-align: left;
}
</style>