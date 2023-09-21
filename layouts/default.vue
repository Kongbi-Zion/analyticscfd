<template>
  <div class="bg-gray-100 w-full h-fit">
    <Header />
    <slot />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped></style>
