<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'

const products = ref([])
const loading = ref(false)
const error = ref(null)

const fetchTecnoMarket = async () => {
    loading.value = true
    error.value = null

    try {
        const res = await fetch('http://127.0.0.1:8000/api/products/')

        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`)
        }

        products.value = await res.json()
    } catch (err) {
        console.error(err)
        error.value = 'No se pudieron cargar los productos 💀'
    } finally {
        loading.value = false
    }
}

onMounted(fetchTecnoMarket)
</script>

<template>
    <Header />

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-10">
                <h3>Lista de Productos</h3>
            </div>

            <div class="col-md-2">
                <a class="btn btn-success float-right" href="#">
                    Agregar producto
                </a>
            </div>
        </div>

        <div v-if="loading" class="alert alert-info">
            Cargando productos...
        </div>

        <div v-if="error" class="alert alert-danger">
            {{ error }}
        </div>

        <br>

        <table v-if="!loading && products.length" class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Brand</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>${{ product.price }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.name_brand }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div v-if="!loading && !products.length" class="alert alert-warning">
            No hay productos cargados 🤷
        </div>
    </div>
</template>

<style scoped>

</style>
