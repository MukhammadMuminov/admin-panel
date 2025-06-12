<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'
import { Badge } from 'lucide-vue-next'

const page = ref(1)
const pageSize = ref(10)

const invoices = [
    {
        username: 'John',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Smith',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        username: 'Alex',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        username: 'Jack',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Doe',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        username: 'Mike',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        username: 'Fury',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Mikey',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Robert',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Ronaldo',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Justin',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
    {
        username: 'Dustin',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
]

const pagedInvoices = computed(() => {
    const start = (page.value - 1) * pageSize.value
    const end = start + pageSize.value
    return invoices.slice(start, end)
})

function handleStatus(status: string) {
    switch (status) {
        case 'Paid':
            return 'text-green-500'
        case 'Pending':
            return 'text-yellow-500'
        case 'Unpaid':
            return 'text-red-500'
    }
}

</script>

<template>
    <div class="w-full mt-6 px-2 sm:px-4 md:px-6">
        <div class="w-full bg-accent p-4 sm:p-6 md:p-8 rounded-md">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
                <h1 class="text-slate-700 text-2xl sm:text-3xl flex items-center gap-2 dark:text-white">
                    Пользователи
                </h1>
                <Button variant="default" class="btn btn-primary">Add</Button>
            </div>
            <div class="mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead class="w-[100px]">
                                №
                            </TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead class="text-right">
                                Amount
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow v-for="(invoice, i) in pagedInvoices" :key="i">
                            <TableCell class="font-medium">
                                {{ i + 1 }}
                            </TableCell>
                            <TableCell class="font-medium">
                                {{ invoice.username }}
                            </TableCell>
                            <TableCell>
                                <Badge :class="handleStatus(invoice.paymentStatus)">
                                    {{ invoice.paymentStatus }}
                                </Badge>
                            </TableCell>
                            <TableCell>{{ invoice.paymentMethod }}</TableCell>
                            <TableCell class="text-right">
                                {{ invoice.totalAmount }}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div class="mt-4">
                <Pagination :items-per-page="pageSize" :total="invoices.length" :default-page="page"
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