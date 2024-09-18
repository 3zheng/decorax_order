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
                { name: 'WP-24', image: 'images/REVESTIMIENTO/WP-24-Cherry-A.jpg' },                
                { name: 'WP-25', image: 'images/REVESTIMIENTO/WP-25-A.jpg' },
                { name: 'WP-26', image: 'images/REVESTIMIENTO/WP-26-A.jpg' },                
                
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