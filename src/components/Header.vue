<script setup>
import { ref, onMounted } from "vue";
import { useThemeStore } from '@/stores/theme'

const message = ref("FakeStore");
const theme = useThemeStore()

onMounted(() => {
    theme.init()
})
</script>

<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                {{ message }}
                </router-link>

                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <router-link to="/grafics" class="nav-link">
                        Graficos
                    </router-link>
                </ul>
                
                <button class="theme-btn" @click="theme.toggle()">
                    {{ theme.dark ? '☀️ Claro' : '🌙 Oscuro' }}
                </button>
            </div>
        </nav>
    </header>
</template>

<style>
:root {
    --bg: #f5f7fb;
    --text: #0f172a;
    --card-bg: #fffsfff;
    --card-text: #0f172a;
    --card-border: #e5e7eb;
}

:root.dark {
    --header-bg: #020617;
    --brand-color: #e5e7eb;
    --btn-bg: #1e293b;
    --btn-text: #f8fafc;

    --footer-color: #1e293b;
}

.nav-link {
    color: var(--text);
}

body {
    background: var(--bg);
    color: var(--text);
}

/* Header */
.navbar {
    background-color: var(--header-bg);
    padding: 1rem;
    }

/* Texto / brand */
.navbar-brand {
    color: var(--brand-color);
    font-weight: 700;
    text-decoration: none;
}

/* Botón */
.theme-btn {
    background-color: var(--btn-bg);
    color: var(--btn-text);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.theme-btn:hover {
    opacity: 0.85;
}

.card {
    background-color: var(--card-bg);
    color: var(--text);
    border: 1px solid var(--card-border);
    border-radius: 0.75rem;
    padding: 1.25rem;
    transition: background-color 0.2s ease, color 0.2s ease;
}
</style>
