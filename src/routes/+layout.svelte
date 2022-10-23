<script>
  import "../app.css"
  import Header from "../components/layouts/Header.svelte"
  import Footer from "../components/layouts/Footer.svelte"

</script>

<template>
  <div>
    <Header />
    <div class="my-[100px]">
      <slot />
    </div>
    <Footer />
  </div>
</template>