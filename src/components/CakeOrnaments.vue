<template>
  <h2 id="adornos">Adornos para decorar</h2>
  <hr />
  <div class="row" style="text-align: center">
    <div class="col-md-6"
    v-for="ornament in $store.state.ornaments"
        :ornament="ornament"
        :key="ornament.id">
      -<strong> {{ ornament.title }} </strong>
        <p>
          <strong>Precio:</strong> ${{ ornament.price }} para 50 personas. <br />
          {{ ornament.description }}
          <br />
          <img
            :src="`${ornament.srcImage}`"
            style="width:300px; height:200px; "
            :alt="ornament.title"
          />
        </p>
    </div>
  </div>
  <!-- <div style="text-align: right">
    <a href="./Home.html"
      ><input type="button" class="button" value="Volver arriba"
    /></a>
  </div> -->
</template>

<style scoped>
</style>