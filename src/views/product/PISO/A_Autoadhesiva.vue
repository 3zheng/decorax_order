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
                { name: 'M-1209', image: 'images/TBD1.jpg' },
                { name: 'M-1212', image: 'images/TBD1.jpg' },
                { name: 'M-8123', image: 'images/TBD1.jpg' },
                { name: 'M-8129', image: 'images/TBD1.jpg' },
                { name: 'M-8806', image: 'images/TBD1.jpg' },
                { name: 'M-8809', image: 'images/TBD1.jpg' },
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