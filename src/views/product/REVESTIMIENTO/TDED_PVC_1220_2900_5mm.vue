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
                { name: 'XD-0008', image: 'images/REVESTIMIENTO/XD-0008.jpg' },                
                { name: 'XD-0016', image: 'images/REVESTIMIENTO/XD-0016.jpg' },
                { name: 'XD-0017', image: 'images/REVESTIMIENTO/XD-0017.jpg' },
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