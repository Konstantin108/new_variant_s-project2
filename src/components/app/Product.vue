<template>
    <div class="featured_link">
        <div class="block__featured">
            <div class="block__self1">
                <img :src="img" alt="photo" class="featured__photo">
                <div class="cart__hover" @click="cartAPI.addProduct(product)">
                    <img src="img/cart_hover.svg" alt="cart_hover_img" class="cart_hover_img">
                    Add to Cart
                </div>
            </div>
            <a :href="href" class="link_for_catalog_item">
                <p class="featured_text">{{product.product_name}}</p>
                <p class="featured_text2">${{product.price}}</p>
            </a>
        </div>
        <div class="small-red-block">Product</div>
    </div>
</template>

<script>
    import Cart from '@/components/app/Cart';

    export default {
        name: 'product',
        props: ['product', 'img', 'href'],
        components: {
            Cart
        },
        data() {
            return {
                cartAPI: this.$root.$refs.cart,
                api: 'https://raw.githubusercontent.com/Konstantin108/Vue-store-project/homework1/responses',
                userSearch: '',
            };
        },
    }
</script>
