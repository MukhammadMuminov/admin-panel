<script setup lang="ts">
const darkMode = ref(false)
const notifications = ref(true)
const language = ref('ru')
const fontSize = ref('medium')

const languages = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
]

const fontSizes = [
    { value: 'small', label: 'Маленький' },
    { value: 'medium', label: 'Средний' },
    { value: 'large', label: 'Большой' }
]
</script>

<template>
    <div class="w-full mt-6 px-2 sm:px-4 md:px-6">
        <div class="w-full bg-accent p-4 sm:p-6 md:p-8 rounded-md">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
                <h1 class="text-slate-700 text-2xl sm:text-3xl flex items-center gap-2 dark:text-white">
                    Настройки
                </h1>
            </div>

            <div class="mt-6 space-y-6">
                <!-- Темная тема -->
                <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div>
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">Темная тема</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Включить темный режим</p>
                    </div>
                    <button 
                        @click="darkMode = !darkMode"
                        class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                        :class="darkMode ? 'bg-blue-600' : 'bg-gray-200'"
                    >
                        <span 
                            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                            :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
                        />
                    </button>
                </div>

                <!-- Уведомления -->
                <div class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div>
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">Уведомления</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Получать уведомления о новых сообщениях</p>
                    </div>
                    <button 
                        @click="notifications = !notifications"
                        class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                        :class="notifications ? 'bg-blue-600' : 'bg-gray-200'"
                    >
                        <span 
                            class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                            :class="notifications ? 'translate-x-6' : 'translate-x-1'"
                        />
                    </button>
                </div>

                <!-- Язык -->
                <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Язык интерфейса</h3>
                    <select 
                        v-model="language"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                        <option v-for="lang in languages" :key="lang.value" :value="lang.value">
                            {{ lang.label }}
                        </option>
                    </select>
                </div>

                <!-- Размер шрифта -->
                <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Размер шрифта</h3>
                    <select 
                        v-model="fontSize"
                        class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                        <option v-for="size in fontSizes" :key="size.value" :value="size.value">
                            {{ size.label }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>