<template>
    <div class="products">
        <product v-for="item of filtered"
                 :key="item.id_product"
                 :img="item.product_img"
                 :href="item.product_link"
                 :product="item">
        </product>
        <div class="big-black-block">Products</div>
    </div>
</template>

<script>
    import Product from '@/components/app/Product';

    export default {
        name: 'products',
        components: {
            Product
        }
    }
</script>
