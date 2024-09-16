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
                { name: 'T01', image: 'images/CORNISA/T01.png' },
                { name: 'T01 MATE', image: 'images/CORNISA/T01-MATE.png' },
                { name: 'T01-C', image: 'images/TBD1.jpg' },
                { name: 'T01-K', image: 'images/TBD1.jpg' },
                { name: 'T01-M', image: 'images/CORNISA/T01-M.png' },
                { name: 'T01-PL', image: 'images/CORNISA/T01-PL.png' },
                { name: 'T10', image: 'images/TBD1.jpg' },
                { name: 'T-205T', image: 'images/TBD1.jpg' },
                { name: 'T-207T', image: 'images/TBD1.jpg' },
                { name: 'T-208T', image: 'images/TBD1.jpg' },
                { name: 'T25-07', image: 'images/TBD1.jpg' },
                { name: 'T-251', image: 'images/TBD1.jpg' },
                { name: 'T-251-A', image: 'images/TBD1.jpg' },
                { name: 'T-253', image: 'images/TBD1.jpg' },
                { name: 'T-253-H', image: 'images/TBD1.jpg' },
                { name: 'T-254', image: 'images/TBD1.jpg' },
                { name: 'T-254-A', image: 'images/TBD1.jpg' },
                { name: 'T-254-H', image: 'images/TBD1.jpg' },
                { name: 'T-255', image: 'images/TBD1.jpg' },
                { name: 'T-2557', image: 'images/CORNISA/T-2557.png' },
                { name: 'T-2557-A', image: 'images/TBD1.jpg' },
                { name: 'T-2557-H', image: 'images/TBD1.jpg' },
                { name: 'T-2557N-W', image: 'images/TBD1.jpg' },
                { name: 'T-2557N-W-A', image: 'images/TBD1.jpg' },
                { name: 'T-2557N-W-H', image: 'images/CORNISA/T-2557N-W-H.png' },
                { name: 'T-255-A', image: 'images/TBD1.jpg' },
                { name: 'T-255-H', image: 'images/TBD1.jpg' },
                { name: 'T-256', image: 'images/TBD1.jpg' },
                { name: 'T-257', image: 'images/CORNISA/T-257.png' },
                { name: 'T-2570', image: 'images/TBD1.jpg' },
                { name: 'T-2571', image: 'images/TBD1.jpg' },
                { name: 'T-2572', image: 'images/TBD1.jpg' },
                { name: 'T-2573', image: 'images/TBD1.jpg' },
                { name: 'T-2574', image: 'images/TBD1.jpg' },
                { name: 'T-258', image: 'images/TBD1.jpg' },
                { name: 'T-2590-H', image: 'images/TBD1.jpg' },
                { name: 'T-2592', image: 'images/TBD1.jpg' },
                { name: 'T-2592-A', image: 'images/TBD1.jpg' },
                { name: 'T-2592-H', image: 'images/TBD1.jpg' },
                { name: 'T-2593', image: 'images/TBD1.jpg' },
                { name: 'T-2593-A', image: 'images/TBD1.jpg' },
                { name: 'T-2593-H', image: 'images/TBD1.jpg' },
                { name: 'T-2594', image: 'images/TBD1.jpg' },
                { name: 'T-2595', image: 'images/TBD1.jpg' },
                { name: 'T-2595-A', image: 'images/TBD1.jpg' },
                { name: 'T-2595-H', image: 'images/TBD1.jpg' },
                { name: 'T-2598', image: 'images/TBD1.jpg' },
                { name: 'T-2598-H', image: 'images/TBD1.jpg' },
                { name: 'T-2599', image: 'images/TBD1.jpg' },
                { name: 'T-2599-H', image: 'images/TBD1.jpg' },
                { name: 'T-PB304', image: 'images/TBD1.jpg' },
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