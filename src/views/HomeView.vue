<template>
  <div class="home">
    <PageHeader />
    <CakeFlavors />
    <CakeOrnaments />
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import CakeFlavors from "@/components/CakeFlavors.vue";
import CakeOrnaments from "@/components/CakeOrnaments.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
    CakeFlavors,
    CakeOrnaments,
    PageFooter,
  },
};
</script>
