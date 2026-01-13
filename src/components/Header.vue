<script setup>
  import { ref } from "vue";
  const message = ref("FakeStore");
</script>

<template>
  <header>
    <nav class="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">{{ message }}</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
</style>
