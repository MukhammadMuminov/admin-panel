<script setup lang="ts">
import { useDragAndDrop } from "@formkit/drag-and-drop/vue"
import { shallowRef } from 'vue'

const page = ref(1)
const pageSize = ref(12)

interface AnalyticsItem {
    title: string
    value: string
    change: string
    isPositive: boolean
    icon: string
}

const analyticsData: AnalyticsItem[] = [
    {
        title: 'Активные пользователи',
        value: '1,234',
        change: '+15%',
        isPositive: true,
        icon: '👥'
    },
    {
        title: 'Время на сайте',
        value: '4:32',
        change: '+2.1%',
        isPositive: true,
        icon: '⏱️'
    },
    {
        title: 'Отказы',
        value: '23.4%',
        change: '-1.2%',
        isPositive: true,
        icon: '↩️'
    },
    {
        title: 'Глубина просмотра',
        value: '5.2',
        change: '+0.8',
        isPositive: true,
        icon: '📊'
    },
    {
        title: 'Мобильные посетители',
        value: '68%',
        change: '+5.4%',
        isPositive: true,
        icon: '📱'
    },
    {
        title: 'Прямые заходы',
        value: '32%',
        change: '-2.1%',
        isPositive: false,
        icon: '🎯'
    },
    {
        title: 'Поисковый трафик',
        value: '45%',
        change: '+3.2%',
        isPositive: true,
        icon: '🔍'
    },
    {
        title: 'Социальные сети',
        value: '18%',
        change: '+4.5%',
        isPositive: true,
        icon: '🌐'
    },
    {
        title: 'Email рассылка',
        value: '12%',
        change: '+1.8%',
        isPositive: true,
        icon: '📧'
    },
    {
        title: 'Реферальный трафик',
        value: '8%',
        change: '-0.5%',
        isPositive: false,
        icon: '🔄'
    },
    {
        title: 'Время до покупки',
        value: '2:15',
        change: '-0:30',
        isPositive: true,
        icon: '⏳'
    },
    {
        title: 'Корзина',
        value: '₽ 8,432',
        change: '+12.3%',
        isPositive: true,
        icon: '🛒'
    },
    {
        title: 'Доставка',
        value: '92%',
        change: '+1.2%',
        isPositive: true,
        icon: '🚚'
    },
    {
        title: 'Возвраты',
        value: '3.2%',
        change: '-0.8%',
        isPositive: true,
        icon: '↪️'
    },
    {
        title: 'Отзывы',
        value: '4.8',
        change: '+0.2',
        isPositive: true,
        icon: '⭐'
    },
    {
        title: 'Поддержка',
        value: '98%',
        change: '+0.5%',
        isPositive: true,
        icon: '💬'
    }
]

const detailedAnalytics = ref(analyticsData)
const [parent, cards] = useDragAndDrop(detailedAnalytics.value)

const pagedInvoices = computed(() => {
    const start = (page.value - 1) * pageSize.value
    const end = start + pageSize.value
    return cards.value.slice(start, end)
})
</script>

<template>
    <div class="w-full mt-6 px-2 sm:px-4 md:px-6">
        <div class="w-full bg-accent p-4 sm:p-6 md:p-8 rounded-md">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
                <h1 class="text-slate-700 text-2xl sm:text-3xl flex items-center gap-2 dark:text-white">
                    Аналитика
                </h1>
            </div>
            <div class="mt-8">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" ref="parent">
                    <div v-for="(item, index) in pagedInvoices" :key="index"
                        class="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-move">
                        <div class="flex items-center gap-2">
                            <span class="text-2xl">{{ item.icon }}</span>
                            <h3 class="text-sm font-medium text-slate-700">{{ item.title }}</h3>
                        </div>
                        <div class="mt-2">
                            <p class="text-lg font-semibold text-slate-900">{{ item.value }}</p>
                            <p :class="[
                                'text-sm mt-1',
                                item.isPositive ? 'text-emerald-600' : 'text-red-600'
                            ]">
                                {{ item.change }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <Pagination :items-per-page="pageSize" :total="cards.length" :default-page="page"
                    @update:page="val => page = val">
                    <PaginationContent v-slot="{ items }">
                        <PaginationPrevious />

                        <template v-for="(item, index) in items" :key="index">
                            <PaginationItem v-if="item.type === 'page'" :value="item.value"
                                :is-active="item.value === page">
                                {{ item.value }}
                            </PaginationItem>
                        </template>

                        <PaginationEllipsis :index="4" />

                        <PaginationNext />
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cursor-move {
    cursor: move;
}
</style>