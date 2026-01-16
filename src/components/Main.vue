<script setup>
import { ref, onMounted, watch } from 'vue'

const categories = ref([])
const data = ref([])
const selectedCategory = ref('all')
const loading = ref(false)

// Obtener categorias
const fetchCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  categories.value = await res.json()
}

// Obtener productos con o sin filtros
const fetchProducts = async () => {
  loading.value = true

  const url =
    selectedCategory.value === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedCategory.value}`

  loading.value = false
  const res = await fetch(url)
  data.value = await res.json()

}

onMounted(() => {
  fetchCategories()
  fetchProducts()
})

watch(selectedCategory, () => {
  fetchProducts()
})
</script>

<template>
  <div class="container mt-4">

    <!-- Filtros -->
    <div class="mb-4 d-flex gap-2 flex-wrap">
      <button class="btn" :class="selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'"
        @click="selectedCategory = 'all'">
        All
      </button>

      <button v-for="cat in categories" :key="cat" class="btn"
        :class="selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'" @click="selectedCategory = cat">
        {{ cat }}
      </button>
    </div>

    <!-- Loading -->
    <p v-if="loading">Cargando productos...</p>

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
              <router-link :to="'/details/' + i.id" type="button" class="btn btn-outline-primary">
                Details
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: var(--card-bg);
  color: var(--text);
  border: 1px solid var(--card-border);
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: background-color 0.2s ease, color 0.2s ease;
}

</style>
