<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const data = ref(null)

  onMounted(async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    data.value = response.data
  })
</script>

<template>
  <div class="container mt-4">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col mb-4" v-for="i in data">
        <div class="card">

          <!-- v-bind -->
          <img class="card-img-top mx-auto d-block" v-bind:src="i.image">

          <div class="card-body">
            <h5 class="card-title">{{ i.title }}</h5>
            <p class="card-text">$ {{ i.price }}</p>
            <span class="badge rounded-pill text-bg-info">{{ i.category }}</span>
            <div class="d-grid gap-2 mt-3">
              <router-link :to="'/details/' + i.id" 
                type="button" class="btn btn-outline-primary">
                Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
