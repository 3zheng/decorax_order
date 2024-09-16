<template>
    <div>
        <ProductList :products="products" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Sujetador',
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: 'CLIC-1', image: 'images/FERRETERIA/CLIC-1.jpg' },
                { name: 'SUJ-1', image: 'images/FERRETERIA/SUJETADORES.jpg' },
                { name: 'SUJ-2', image: 'images/FERRETERIA/SUJETADORES.jpg' },
                { name: 'SUJ-3', image: 'images/FERRETERIA/SUJETADORES.jpg' },
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