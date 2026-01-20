<script setup>
import AvgPriceByCategoryChart from '@/components/grafics/AvgPriceByCategoryChart.vue';
import CountProductsByCategory from '@/components/grafics/countProductsByCategory.vue';
import ProductsByCategoryChart from '@/components/grafics/ProductsByCategoryChart.vue';
import Header from '@/components/Header.vue'
</script>

<template>
  <Header />
  <h1>Gráficos</h1>
  <ProductsByCategoryChart />
  <br>
  <AvgPriceByCategoryChart />
  <br>
  <CountProductsByCategory />
  <br>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>