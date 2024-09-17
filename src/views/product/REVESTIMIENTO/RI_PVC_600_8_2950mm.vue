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
                { name: 'BV601', image: 'images/REVESTIMIENTO/BV601-H.jpg' },
                { name: 'BV601-H', image: 'images/REVESTIMIENTO/BV601-H.jpg' },                
                { name: 'BV603', image: 'images/REVESTIMIENTO/BV603.jpg' },
                { name: 'BV604', image: 'images/REVESTIMIENTO/BV604.jpg' },
                { name: 'BV605', image: 'images/REVESTIMIENTO/BV605.jpg' },
                { name: 'BV606', image: 'images/REVESTIMIENTO/BV606.jpg' },
                { name: 'BV607', image: 'images/REVESTIMIENTO/BV607.jpg' },
                { name: 'BV608', image: 'images/REVESTIMIENTO/BV608.jpg' },
                { name: 'BV609', image: 'images/REVESTIMIENTO/BV609.jpg' },
                { name: 'BV610', image: 'images/REVESTIMIENTO/BV610.jpg' },
                { name: 'BV611', image: 'images/REVESTIMIENTO/BV611.jpg' },
                { name: 'BV612', image: 'images/REVESTIMIENTO/BV612.jpg' },
                { name: 'BV614', image: 'images/REVESTIMIENTO/BV614.jpg' },
                { name: 'BV615', image: 'images/REVESTIMIENTO/BV615.jpg' },
                { name: 'BV616', image: 'images/REVESTIMIENTO/BV616.jpg' },
                { name: 'BV617', image: 'images/REVESTIMIENTO/BV617-H.jpg' },
                { name: 'BV617-H', image: 'images/REVESTIMIENTO/BV617-H.jpg' },
                { name: 'BV619', image: 'images/REVESTIMIENTO/BV619.jpg' },
                { name: 'BV620', image: 'images/REVESTIMIENTO/BV620.jpg' },
                { name: 'BV659', image: 'images/REVESTIMIENTO/BV659-H.jpg' },
                { name: 'BV659-H', image: 'images/REVESTIMIENTO/BV659-H.jpg' },
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