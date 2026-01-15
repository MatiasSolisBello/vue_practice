<script setup>
import Header from '@/components/Header.vue'

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref(null)

onMounted(async () => {
    const itemId = route.params.id;
    const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
    product.value = await response.json();
})
</script>

<template>
    <Header />

    <div class="container mt-4" v-if="product">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">

                    <!-- v-bind -->
                    <img :src="product.image" class="card-img-top p-4" />

                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>

                        <p class="card-text fw-bold">$ {{ product.price }}</p>

                        <span class="badge bg-info text-dark mb-2">
                            {{ product.category }}
                        </span>

                        <p class="mt-2">
                            {{ product.rating.rate }} ⭐ ({{ product.rating.count }})
                        </p>

                        <p class="card-text">
                            {{ product.description }}
                        </p>

                        <RouterLink to="/" class="btn btn-outline-primary">
                            Go Back
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>

<style>
img {
    max-height: 250px;
    object-fit: contain;
}
</style>