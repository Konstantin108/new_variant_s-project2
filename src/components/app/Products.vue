<template>
    <div class="products">
        <product v-for="item of filtered"
                 :key="item.id_product"
                 :img="item.product_img"
                 :href="item.product_link"
                 :product="item">
        </product>
    </div>
</template>

<script>
    import Product from '@/components/app/Product';

    export default {
        name: 'products',
        components: {
            Product
        },
        data() {
            return {
                catalogUrl: '/catalogData.json',
                products: [],
                filtered: [],
                api: 'https://raw.githubusercontent.com/Konstantin108/new_variant_s-project2/last_try/responses',
                userSearch: '',
            }
        },
        methods: {
            getJson(url) {
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => {
                        alert('error');
                    })
            },
            filter(value) {
                let regexp = new RegExp(value, 'i');
                this.filtered = this.products.filter(el => regexp.test(el.product_name));
            }
        },
        mounted() {
            this.getJson(`${this.api + this.catalogUrl}`)
                .then(data => {
                    for (let el of data) {
                        this.products.push(el);
                        this.filtered.push(el);
                    }
                });
        },
    }
</script>
