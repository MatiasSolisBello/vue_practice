<script setup>
/* import { ref } from 'vue'
const message = ref('Footer') */
</script>

<template>
  <footer>
    <div class="footer-content">
      <p>&copy; {{ new Date().getFullYear() }} Mi Aplicación Vue. Todos los derechos reservados.</p>
      <nav>
        <a href="/about">Sobre Nosotros</a> |
        <a href="/contact">Contacto</a> |
        <a href="/faq">FAQ</a>
      </nav>
      <div class="social-links">
        <!-- Iconos de redes sociales aquí -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: var(--bg);
    padding: 20px;
    text-align: center;
    border-top: 1px solid #e0e0e0;
  }
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  nav a {
    margin: 0 10px;
    color: #007bff;
    text-decoration: none;
  }
  nav a:hover {
    text-decoration: underline;
  }
</style>