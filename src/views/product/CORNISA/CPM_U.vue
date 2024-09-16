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
                { name: 'U01', image: 'images/CORNISA/U01.jpg' },
                { name: 'U01-C', image: 'images/TBD1.jpg' },
                { name: 'U01-K', image: 'images/TBD1.jpg' },
                { name: 'U-207T', image: 'images/TBD1.jpg' },
                { name: 'U-2504', image: 'images/TBD1.jpg' },
                { name: 'U-251', image: 'images/TBD1.jpg' },
                { name: 'U-251-A', image: 'images/TBD1.jpg' },
                { name: 'U-253', image: 'images/TBD1.jpg' },
                { name: 'U-253-H', image: 'images/TBD1.jpg' },
                { name: 'U-254', image: 'images/TBD1.jpg' },
                { name: 'U-254-H', image: 'images/TBD1.jpg' },
                { name: 'U-254-A', image: 'images/TBD1.jpg' },
                { name: 'U-254-H', image: 'images/TBD1.jpg' },
                { name: 'U-255', image: 'images/TBD1.jpg' },
                { name: 'U-255-H', image: 'images/TBD1.jpg' },
                { name: 'U-2557', image: 'images/TBD1.jpg' },
                { name: 'U-2557-A', image: 'images/TBD1.jpg' },
                { name: 'U-2557N-W', image: 'images/TBD1.jpg' },
                { name: 'U-2557N-W-A', image: 'images/TBD1.jpg' },
                { name: 'U-2557N-W-H', image: 'images/CORNISA/U-2557N-W-H.png' },
                { name: 'U-255-A', image: 'images/TBD1.jpg' },
                { name: 'U-2570', image: 'images/TBD1.jpg' },
                { name: 'U-2571', image: 'images/TBD1.jpg' },
                { name: 'U-2572', image: 'images/TBD1.jpg' },
                { name: 'U-2573', image: 'images/TBD1.jpg' },
                { name: 'U-2574', image: 'images/TBD1.jpg' },
                { name: 'U-258', image: 'images/TBD1.jpg' },
                { name: 'U-2590-H', image: 'images/TBD1.jpg' },
                { name: 'U-2592-A', image: 'images/TBD1.jpg' },
                { name: 'U-2593-A', image: 'images/TBD1.jpg' },
                { name: 'U-2593-H', image: 'images/TBD1.jpg' },
                { name: 'U-2595', image: 'images/TBD1.jpg' },
                { name: 'U-2595-A', image: 'images/TBD1.jpg' },
                { name: 'U-2595-H', image: 'images/TBD1.jpg' },
                { name: 'UP01', image: 'images/TBD1.jpg' },
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