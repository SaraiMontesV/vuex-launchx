<template>
  <SimpleHeader />
  <div class="container">
    <div class="row" style="text-align: left; margin-top: 5%">
      <div class="col-md-6">
        <BakerFlavors />
      </div>
      <div class="col-md-6">
        <BakerOrnaments />
      </div>
    </div>
    <div class="row" style="text-align: left; margin-top: 5%">
      <div class="col-md-12">
        <OrdersActives/>
      </div>
    </div>
  </div>
</template>


<script>
import SimpleHeader from "@/components/SimpleHeader.vue";
import BakerFlavors from "@/components/BakerFlavors.vue";
import BakerOrnaments from "@/components/BakerOrnaments.vue";
import OrdersActives from "@/components/OrdersActives.vue";


export default {
  name: "BakerView",
  components: {
    SimpleHeader,
    BakerFlavors,
    BakerOrnaments,
    OrdersActives,
  }
};
</script>