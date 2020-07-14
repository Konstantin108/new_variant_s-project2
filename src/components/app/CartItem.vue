<template>
    <div class="cart__content">
        <a :href="href" class="link_in_desk">
            <img :src="img" alt="Some image" class="cart__image__content">
            <div class="desk">
                <p class="cart__text_1">{{cartItem.product_name}}</p>
                <img src="img/stars.png" alt="stars" class="stars">
                <div class="item_bio">
                    <p class="product-quantity">{{cartItem.quantity}} X</p>
                    <p class="product-price">$ {{cartItem.quantity*cartItem.price}}</p>
                </div>
            </div>
        </a>
        <div class="right_desc_block">
            <button class="delete_cart_item" @click="$emit('remove', cartItem)">
                <i class="fas fa-times-circle"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import Product from '@/components/app/Product';

    export default {
        name: 'cart-item',
        props: ['cartItem', 'img', 'href'],
        data() {
            return {
                // api: 'https://raw.githubusercontent.com/Konstantin108/Vue-store-project/try_make_btn_clearall/responses',
                userSearch: '',
            }
        },
        components: {
            Product
        }
    }
</script>
