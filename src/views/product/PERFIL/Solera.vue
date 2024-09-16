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
                { name: 'SOLERA-65', image: 'images/TBD1.jpg' },
                { name: 'SOLERA-72', image: 'images/TBD1.jpg' },
                { name: 'SOLERA-3 (0,45)', image: 'images/TBD1.jpg' },
                { name: 'SOLERA-3 (0,35)', image: 'images/TBD1.jpg' },
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