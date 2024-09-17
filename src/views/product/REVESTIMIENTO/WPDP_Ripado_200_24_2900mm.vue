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
                { name: 'BV2524', image: 'images/CIELO-FALSO-PVC/BV2524.jpg' },                
                { name: 'BV2525', image: 'images/CIELO-FALSO-PVC/BV2525.jpg' },
                { name: 'BV2526', image: 'images/CIELO-FALSO-PVC/BV2526.jpg' },
                { name: 'BV2527', image: 'images/TBD1.jpg' },
                { name: 'BV2528', image: 'images/TBD1.jpg' },
                { name: 'BV2529', image: 'images/TBD1.jpg' },
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