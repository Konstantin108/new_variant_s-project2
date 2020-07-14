<template>
        <div class="app-loader">
            Загружается страница товаров
        </div>
</template>

<script>
    export default {
        name: 'loader',
        computed: {
            color() {
                const colors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only']
                return colors[Math.floor(Math.random() * 3)]
            }
        }
    }
</script>
