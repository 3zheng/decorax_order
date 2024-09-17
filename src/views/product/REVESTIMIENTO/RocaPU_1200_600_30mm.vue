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
                { name: 'PUA-3-1', image: 'images/REVESTIMIENTO/PUA-31.jpg' },                
                { name: 'PUA-3-12', image: 'images/TBD1.jpg' },
                { name: 'PUA-3-4', image: 'images/REVESTIMIENTO/PUA-34.jpg' },
                { name: 'PUA-3-6', image: 'images/REVESTIMIENTO/PUA-36.jpg' },
                { name: 'PUA-3-7', image: 'images/REVESTIMIENTO/PUA-37.jpg' },                
                { name: 'PUA-4-3', image: 'images/TBD1.jpg' },
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