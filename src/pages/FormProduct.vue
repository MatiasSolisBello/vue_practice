<script setup>
import { ref, onMounted, computed } from 'vue'
import Header from '@/components/Header.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const brands = ref([])
const errors = ref({})

const isEdit = computed(() => Boolean(route.params.id))


const product = ref({
    name: '',
    price: null,
    description: '',
    is_new: false,
    brand: null,
    fabrication_date: ''
})

// Obtener datos de las Marcas desde la API
const fetchBrands = async () => {
    try {
        const res = await fetch('http://127.0.0.1:8000/api/brands/')
        if (!res.ok) throw new Error('DRF se levantó cruzado')
        brands.value = await res.json()
    } catch (error) {
        console.error('Error cargando marcas:', error)
    }
}


// Obtener datos de la API
const fetchProduct = async () => {
    try {
        const res = await fetch(
            `http://127.0.0.1:8000/api/products/${route.params.id}/`
        )
        if (!res.ok) throw new Error('Producto no encontrado')
        const data = await res.json()

        product.value = {
            ...data,
            brand: data.brand?.id ?? data.brand
        }
    } catch (err) {
        console.error(err)
        router.push('/tecno-market')
    }
}

// Recibir datos del formulario
const createProduct = async () => {
    errors.value = {}
    try {
        const method = isEdit.value ? 'PUT' : 'POST'
        const url = isEdit.value
            ? `http://127.0.0.1:8000/api/products/${route.params.id}/`
            : 'http://127.0.0.1:8000/api/products/'

        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product.value)
        })

        if (!res.ok) {
            const data = await res.json()

            if (res.status === 400) {
                errors.value = data
                return
            }
            throw new Error('Algo salió mal, Django está llorando')
        }
        const data = await res.json()
        router.push('/tecno-market')

    } catch (error) {
        console.error(error)
        alert('Error general. Probá más tarde.')
    }
}

onMounted(() => {
    fetchBrands()

    if (isEdit.value) {
        fetchProduct()
    }
})
</script>

<template>
    <Header />

    <div class="container mt-4">
        <h2>{{ isEdit ? 'Editar producto' : 'Crear producto' }}</h2>
        
        <form @submit.prevent="createProduct">
            <div class="row">
                <div class="col-md-3">
                    <label class="form-label" for="name">Nombre</label>
                    <input class="form-control" v-model="product.name" required />
                    <p v-if="errors.name" class="text-danger">
                        {{ errors.name[0] }}
                    </p>
                </div>

                <div class="col-md-3">
                    <label class="form-label" for="price">Precio</label>
                    <input class="form-control" type="number" v-model="product.price" required />
                    <p v-if="errors.price" class="text-danger">
                        {{ errors.price[0] }}
                    </p>
                </div>

                <div class="col-md-3">
                    <label class="form-label" for="brand">Marca</label>
                    <select v-model="product.brand" class="form-control">
                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">
                            {{ brand.name }}
                        </option>
                    </select>
                    <p v-if="errors.brand" class="text-danger">
                        {{ errors.brand[0] }}
                    </p>
                </div>

                <div class="col-md-3">
                    <label class="form-label" for="fabrication_date">Fecha de fabricación</label>
                    <input class="form-control" type="date" v-model="product.fabrication_date" />
                    <p v-if="errors.fabrication_date" class="text-danger">
                        {{ errors.fabrication_date[0] }}
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <label class="form-label" for="description">Descripcion</label>
                    <textarea class="form-control" v-model="product.description"></textarea>
                    <p v-if="errors.description" class="text-danger">
                        {{ errors.description[0] }}
                    </p>
                </div>
            </div>

            <div class="row">
                <label class="form-label" for="is_new">
                    <input type="checkbox" v-model="product.is_new" />
                    Nuevo
                </label>
            </div>
            <div class="form-row d-flex justify-content-end mt-4">
                <button class="btn btn-success btn-lg float-right">
                    {{ isEdit ? 'Guardar cambios' : 'Crear producto' }}
                </button>
            </div>

        </form>
    </div>
</template>

<style scoped></style>