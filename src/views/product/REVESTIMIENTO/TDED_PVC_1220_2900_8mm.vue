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
                { name: 'XD-0001', image: 'images/REVESTIMIENTO/XD-0001.jpg' },                
                { name: 'XD-0012', image: 'images/REVESTIMIENTO/XD-0012.jpg' },
                { name: 'XD-0021', image: 'images/REVESTIMIENTO/XD-0021.jpg' },
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