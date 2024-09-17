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
                { name: 'BV403', image: 'images/TBD1.jpg'  },                
                { name: 'BV404', image: 'images/REVESTIMIENTO/BV404.jpg' },
                { name: 'BV494', image: 'images/REVESTIMIENTO/BV494-H.jpg' },
                { name: 'BV496', image: 'images/REVESTIMIENTO/BV496.jpg' },
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