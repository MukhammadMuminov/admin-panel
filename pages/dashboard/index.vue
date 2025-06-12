<script setup lang="ts">
import { Line, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const areaChartData = {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
  datasets: [
    {
      label: 'Продажи',
      data: [30, 40, 35, 50, 49, 60],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4
    }
  ]
}

const donutChartData = {
  labels: ['Продукт A', 'Продукт B', 'Продукт C'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const analyticsCards = [
  {
    title: 'Общая выручка',
    value: '₽ 1,234,567',
    change: '+12.5%',
    isPositive: true
  },
  {
    title: 'Новые клиенты',
    value: '234',
    change: '+8.2%',
    isPositive: true
  },
  {
    title: 'Средний чек',
    value: '₽ 5,678',
    change: '-2.4%',
    isPositive: false
  },
  {
    title: 'Конверсия',
    value: '3.2%',
    change: '+1.1%',
    isPositive: true
  }
]
 
</script>

<template>
  <div class="w-full mt-6 px-2 sm:px-4 md:px-6">
    <div class="w-full bg-accent p-4 sm:p-6 md:p-8 rounded-md">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
        <h1 class="text-slate-700 text-2xl sm:text-3xl flex items-center gap-2 dark:text-white">
          Дашборд
        </h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div v-for="(card, index) in analyticsCards" :key="index" 
             class="bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 border border-emerald-900/30 rounded-lg p-4">
          <h3 class="text-sm text-emerald-900/70 font-medium">{{ card.title }}</h3>
          <div class="mt-2">
            <p class="text-2xl font-semibold text-emerald-900">{{ card.value }}</p>
            <p :class="[
              'text-sm mt-1',
              card.isPositive ? 'text-emerald-600' : 'text-red-600'
            ]">
              {{ card.change }}
            </p>
          </div>
        </div>
      </div>
      
     
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-4">Продажи по месяцам</h2>
          <div class="h-[300px]">
            <Line :data="areaChartData" :options="chartOptions" />
          </div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-4">Распределение продуктов</h2>
          <div class="h-[300px]">
            <Doughnut :data="donutChartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>