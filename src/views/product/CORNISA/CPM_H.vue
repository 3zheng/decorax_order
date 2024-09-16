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
                { name: 'H01', image: 'images/CORNISA/H01.jpg' },
                { name: 'H01-C', image: 'images/TBD1.jpg' },
                { name: 'H01-K', image: 'images/TBD1.jpg' },
                { name: 'H10', image: 'images/TBD1.jpg' },
                { name: 'H-205T', image: 'images/TBD1.jpg' },
                { name: 'H-207T', image: 'images/TBD1.jpg' },
                { name: 'H-251', image: 'images/TBD1.jpg' },
                { name: 'H-251-A', image: 'images/TBD1.jpg' },
                { name: 'H-253', image: 'images/TBD1.jpg' },
                { name: 'H-254', image: 'images/TBD1.jpg' },
                { name: 'H-254-A', image: 'images/TBD1.jpg' },
                { name: 'H-254-H', image: 'images/TBD1.jpg' },
                { name: 'H-255', image: 'images/TBD1.jpg' },
                { name: 'H-2557', image: 'images/TBD1.jpg' },
                { name: 'H-2557-A', image: 'images/TBD1.jpg' },
                { name: 'H-2557-H', image: 'images/TBD1.jpg' },
                { name: 'H-2557N-W', image: 'images/TBD1.jpg' },
                { name: 'H-2557N-W-A', image: 'images/TBD1.jpg' },
                { name: 'H-255-A', image: 'images/TBD1.jpg' },
                { name: 'H-256', image: 'images/TBD1.jpg' },
                { name: 'H-2570', image: 'images/TBD1.jpg' },
                { name: 'H-2571', image: 'images/TBD1.jpg' },
                { name: 'H-2572', image: 'images/TBD1.jpg' },
                { name: 'H-2573', image: 'images/TBD1.jpg' },
                { name: 'H-2574', image: 'images/TBD1.jpg' },
                { name: 'H-258', image: 'images/TBD1.jpg' },
                { name: 'H-2590-H', image: 'images/TBD1.jpg' },
                { name: 'H-2592', image: 'images/TBD1.jpg' },
                { name: 'H-2592-A', image: 'images/TBD1.jpg' },
                { name: 'H-2592-H', image: 'images/TBD1.jpg' },
                { name: 'H-2593', image: 'images/TBD1.jpg' },
                { name: 'H-2593-A', image: 'images/TBD1.jpg' },
                { name: 'H-2593-H', image: 'images/TBD1.jpg' },
                { name: 'H-2595', image: 'images/TBD1.jpg' },
                { name: 'H-2595-A', image: 'images/TBD1.jpg' },
                { name: 'H-2595-H', image: 'images/TBD1.jpg' },
                { name: 'H-2597-H', image: 'images/TBD1.jpg' },
                { name: 'H-2598', image: 'images/TBD1.jpg' },
                { name: 'H-2598-H', image: 'images/TBD1.jpg' },
                { name: 'H-2599', image: 'images/TBD1.jpg' },
                { name: 'H-BV615', image: 'images/TBD1.jpg' },
                { name: 'HP01', image: 'images/TBD1.jpg' },
                { name: 'H-PB304', image: 'images/TBD1.jpg' },
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