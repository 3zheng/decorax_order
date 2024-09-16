<template>
    <div>
        <ProductList :products="products" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: 'BV595-0', image: 'images/CIELO-MODULAR/BV595-0.jpg' },
                { name: 'BV595-1', image: 'images/CIELO-MODULAR/BV595-1.jpg' },
                { name: 'BV595-2', image: 'images/CIELO-MODULAR/BV595-2.jpg' },
                { name: 'BV595-3', image: 'images/CIELO-MODULAR/BV595-3.jpg' },
                { name: 'BV595-4', image: 'images/CIELO-MODULAR/BV595-4.jpg' },
                { name: 'BV595-5', image: 'images/CIELO-MODULAR/BV595-5.jpg' },
                { name: 'BV595-6', image: 'images/CIELO-MODULAR/BV595-6.jpg' },
                { name: 'BV595-7', image: 'images/CIELO-MODULAR/BV595-7.jpg' },
                { name: 'BV595-8', image: 'images/CIELO-MODULAR/BV595-8.jpg' },
                { name: 'BV595-9', image: 'images/CIELO-MODULAR/BV595-9.jpg' },
                { name: 'BV595-10', image: 'images/CIELO-MODULAR/BV595-10.jpg' },
                { name: 'BV595-11', image: 'images/CIELO-MODULAR/BV595-11.jpg' },
                { name: 'BV595-12', image: 'images/CIELO-MODULAR/BV595-12.jpg' },
                { name: 'BV595-13', image: 'images/CIELO-MODULAR/BV595-13.jpg' },
                // 更多商品数据
            ]
        };
    },
    methods: {
        viewProductDetail(product) {
            console.log('查看商品详情:', product);
            // 处理查看详情逻辑
        }
    }
};
</script>

<style scoped>
/* 你的样式 */
</style>