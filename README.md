# Apuntes de Vue.js

## Indice
- [Instalaciones necesarias y documentación](#instalaciones-necesarias-y-documentación)
- [Variables](#variables)
- [Componente](#componente)
- [Eventos](#eventos)
- [v-bind](#v-bind)
- [v-model](#v-model)
- [Clases dinámicas](#clases-dinámicas)
- [v-if](#v-if)
- [Component Event](#component-event)
- [Watch](#watch)
- [watchEffect](#watcheffect)
- [Formularios](#formularios)
- [Vue Router](#vue-router)
- [Router Link](#router-link)
- [Pinia](#pinia)
- [Fetch](#fetch)

---

## Instalaciones necesarias y documentación
* NPM
* Node.js
* [VS Code](https://code.visualstudio.com/) 
* [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
* Chromium-based browsers (Chrome, Edge, Brave, etc.):

	- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
	- [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
	- Firefox:
	- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
	- [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

See [Vite Configuration Reference](https://vite.dev/config/).

Crear proyecto, instalar y ejecutar
```shell
npm create vue@latest
npm install
npm run dev
```

## Variables

```html
<script setup>
	import { ref } from 'vue'
 	const message = ref('Hola mundo')
</script>

<template>
	<h2>{{ message }}</h2>
</template>

<style scoped></style>
```

## Componente

Home.vue
```html
<script setup>
	import Header from '@/components/Header.vue'
	import Main from '@/components/Main.vue'
	import Footer from '@/components/Footer.vue'
</script>

<template>
	<Header />
	<Main />
	<Footer />
</template>

<style scoped></style>
```

## Eventos
```html
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <p>Moose count: {{ count }}</p>
  <button @click="count++">Count moose</button>
</template>
```

## v-bind
v-bind se usa cuando necesitás enlazar dinámicamente un valor de JavaScript a un atributo, propiedad o prop

```html
const imageUrl: 'https://picsum.photos/200'
<img v-bind:src="imageUrl">
```

```html
<div class="col mb-4" v-for="item in items">
	<img class="card-img-top mx-auto d-block" v-bind:src="item.image">
</div>
```

## v-model
Permite la vinculación bidireccional de datos entre un componente y su modelo
```html
<!--Input-->
<input class="form-control" v-model="product.name" required />

<!--Select-->
<select v-model="product.brand" class="form-control">
	<option v-for="brand in brands" :key="brand.id" :value="brand.id">
		{{ brand.name }}
	</option>
</select>

<!--TextArea-->
<textarea class="form-control" v-model="product.description"></textarea>
```

## Clases dinámicas
Una clase dinámica es una clase CSS que no está escrita de forma fija, sino que se aplica o no se aplica según el estado de la aplicación.

```html
<script setup>
import { ref, onMounted, watch } from 'vue'
const selectedCategory = ref('all')
</script>

<template>
<!-- Filtros -->
	<div class="mb-4 d-flex gap-2 flex-wrap">
		<button 
		  v-for="cat in categories" 
		  :key="cat" 
		  class="btn"
		  :class="selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'"
		  @click="selectedCategory = cat">
			{{ cat }}
		</button>
	</div>
</template>
```

## v-if
```html
<script setup>
	const loading = ref(false)
	loading.value = true
</script>

<template>
	<p v-if="loading">Cargando productos...</p>
</template>
```

## Component Event
Un Component Event es un evento personalizado que un componente hijo emite para que el componente padre reaccione.

## Watch
es un observador reactivo. Sirve para ejecutar código cuando un dato cambia.
```html
<script setup>

import { ref, onMounted, watch } from 'vue'

const fetchProducts = async () => {
	...
}
watch(selectedCategory, () => {
	fetchProducts()
})

</script>
```

## watchEffect
es una función de la Composition API que ejecuta un callback inmediatamente, rastreando automáticamente cualquier dependencia reactiva utilizada dentro de él y reejecutándolo cuando estas cambian

## Formularios

## Vue Router
```shell
npm install vue-router
```

src/router/index.js
```html
import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "home", component: Home },
		{ path: "/details/:id", name: "details", component: Details },
	]
})
export default router;
```

src/main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia()

// AGREGAR .use(router)
createApp(App).use(router).use(pinia).mount('#app')
```

## Router Link
```html
<!--Index-->
<router-link to="/" class="navbar-brand">
	{{ message }}
</router-link>

<!--Otra ruta-->
<router-link to="/grafics" class="nav-link">
	Graficos
</router-link>

<!--Detalle con obtención de id dentro de for-->
<router-link :to="'/details/' + item.id" type="button">
	Details
</router-link>
```

## Pinia
Gestor de estados globales.
```shell
npm install pinia
```
src/main.js
```javascript
import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
```

## Fetch 

```javascript
<script setup>

const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    categories.value = await res.json()
}

onMounted(() => {
    fetchCategories()
})
</script>

<template>

</template>
```
