<template>
    <div>
        <Loader v-if="loading"></Loader>
        <div v-else>
        <products></products>
        <div class="big-blue-block">Products currency</div>
        </div>
    </div>
</template>

<script>
    import Products from "./Products";
    import Loader from "./Loader";
    export default {
        name: 'products-currency',
        data: () => ({
            loading: true,
            currency: null
        }),
        async mounted() {
            this.currency = await this.$store.dispatch('getJson')
            console.log(this.currency)
            this.loading = false
        },
        components: {Products, Loader},
    }
</script>
