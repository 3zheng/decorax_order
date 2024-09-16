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
                { name: 'F01', image: 'images/CORNISA/F01.jpg' },
                { name: 'F01-K', image: 'images/TBD1.jpg' },
                { name: 'F-251', image: 'images/TBD1.jpg' },
                { name: 'F-251 P', image: 'images/TBD1.jpg' },
                { name: 'F-253', image: 'images/TBD1.jpg' },
                { name: 'F-253 P', image: 'images/TBD1.jpg' },
                { name: 'F-255', image: 'images/TBD1.jpg' },
                { name: 'F-255 P', image: 'images/TBD1.jpg' },
                { name: 'F-2557N-w', image: 'images/TBD1.jpg' },
                { name: 'F-2570', image: 'images/TBD1.jpg' },
                { name: 'F-2572', image: 'images/TBD1.jpg' },
                { name: 'F-2573', image: 'images/TBD1.jpg' },
                { name: 'F-2574', image: 'images/TBD1.jpg' },
                { name: 'F-2592', image: 'images/TBD1.jpg' },
                { name: 'F-2598', image: 'images/TBD1.jpg' },
                { name: 'F-2599', image: 'images/TBD1.jpg' },
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