<script setup>
import { ref, onMounted } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
} from 'chart.js'

import { fetchProducts, avgPriceByCategory } from '@/stores/api.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref(null)

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
    }
  }
}

// Cargamos los datos del gráfico al montar el componente
onMounted(async () => {
  const products = await fetchProducts()
  const avgPrices = avgPriceByCategory(products)

  chartData.value = {
    labels: Object.keys(avgPrices),
    datasets: [
      {
        label: 'Precio promedio por categoría',
        backgroundColor: '#42A5F5',
        data: Object.values(avgPrices)
      }
    ]
  }
})
</script>

<template>
    <section class="charts">
        <div class="chart">
            <h2>Promedio Precios por categoría</h2>
            <Bar
                id="my-chart-id"
                v-if="chartData"
                :options="chartOptions"
                :data="chartData"
            /> 
        </div>
    </section>
</template>

<style scoped>

.charts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.chart {
  width: 100%;
}
</style>