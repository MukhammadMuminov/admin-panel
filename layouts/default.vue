<script setup lang="ts">
import {
    LayoutDashboard,
    Users,
    Settings,
    BarChart3,
    ChevronLeft,
    ChevronRight
} from 'lucide-vue-next'



const isCollapsed = ref(false)
const route = useRoute()
const data = [
    {
        title: 'Дашборд',
        icon: LayoutDashboard,
        link: '/dashboard'
    },
    {
        title: 'Пользователи',
        icon: Users,
        link: '/users'
    },

    {
        title: 'Аналитика',
        icon: BarChart3,
        link: '/analytics'
    },

    {
        title: 'Настройки',
        icon: Settings,
        link: '/settings'
    },
]
</script>

<template>
    <div class="relative flex">
        <div :class="[
            'flex flex-col items-start border-r-2 border-gray-200 h-screen bg-slate-500 transition-all duration-300',
            isCollapsed ? 'w-16' : 'w-59'
        ]">
            <div class="w-full p-4">
                <h1 v-if="!isCollapsed" class="text-4xl font-semebold text-white mb-8 text-center ">
                    Admin Panel</h1>

                <nav class="space-y-1">
                    <NuxtLink v-for="item in data" :key="item.title" exact-active-class="bg-slate-100 text-black"
                        :to="item.link" :class="[
                            'flex w-full items-center text-xl font-semibold py-3 hover:text-black hover:bg-slate-100 rounded-lg transition-colors',
                            isCollapsed ? 'justify-center px-0' : 'px-4',
                            route.path !== item.link ? 'text-white' : ''
                        ]">
                        <component :is="item.icon" :class="[
                            'transition-all duration-300',
                            isCollapsed ? 'w-6 h-6 mx-auto' : 'w-5 h-5'
                        ]" />
                        <span v-if="!isCollapsed" class="ml-3">{{ item.title }}</span>
                    </NuxtLink>
                </nav>
            </div>
        </div>

        <div class="w-full flex-1">
            <div class="flex-1 p-8">
                <slot />
            </div>
        </div>



        <button @click="isCollapsed = !isCollapsed"
            class="absolute top-1/2 transform -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full p-1 hover:bg-gray-100 transition-all duration-300 ease-in-out"
            :class="isCollapsed ? 'left-12' : 'left-56'">
            <ChevronLeft v-if="!isCollapsed" class="w-4 h-4" />
            <ChevronRight v-else class="w-4 h-4" />
        </button>
    </div>

</template>