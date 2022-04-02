<template>
  <h2 id="sabores">Sabores de pasteles</h2>
  <hr />
  <div class="container">
    <div class="row" style="text-align: center">
      <div
        class="col-md-6"
        v-for="flavor in $store.state.flavors"
        :flavor="flavor"
        :key="flavor.id"
      >
        -<strong> {{ flavor.title }} </strong>
        <p>
          <strong>Precio:</strong> ${{ flavor.price }} para 50 personas. <br />
          {{ flavor.description }}
          <br />
          <img
            :src="`${flavor.srcImage}`"
            style="width:300px; height:200px; "
            :alt="flavor.title"
          />
        </p>
      </div>
    </div>
  </div>
</template>
