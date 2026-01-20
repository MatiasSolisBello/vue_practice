<script setup>
import { ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { fetchProducts, countProductsByCategory } from '@/stores/api.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const chartData = ref(null)

const chartOptions = {
    responsive: true,
    plugins: {
            legend: {
            position: 'bottom'
        },
        tooltip: {
        callbacks: {
            label: ctx => `${ctx.label}: ${ctx.raw} productos`
        }
        }
    }
}

onMounted(async () => {
    const products = await fetchProducts()
    const grouped = countProductsByCategory(products)

    chartData.value = {
        labels: Object.keys(grouped),
        datasets: [{
            data: Object.values(grouped),
            backgroundColor: [
                'rgb(99, 122, 255)',
                'rgb(227, 255, 74)',
                'rgb(74, 255, 246)',
                'rgb(186, 74, 255)'
            ],
        }]
    }
})
</script>

<template>
    <section class="charts">
        <h2>Cantidad de productos por categoria</h2>
        <div class="chart">
            <div v-if="chartData">
                <Pie 
                    id="my-chart-id"
                    v-if="chartData"    
                    :options="chartOptions" 
                    :data="chartData" 
                />
            </div>
        </div>
    </section>
</template>

<style scoped>  
.charts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.chart {
  width: 80%;
}
</style>