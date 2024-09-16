<template>
    <div>
        <ProductList :products="products" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Silicona',
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: 'High Grab-118', image: 'images/TBD1.jpg' },
                { name: 'High Grab-116', image: 'images/TBD1.jpg' },
                { name: 'HT-N', image: 'images/TBD1.jpg' },
                { name: 'HT-C', image: 'images/TBD1.jpg' },
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