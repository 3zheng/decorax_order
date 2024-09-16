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
                { name: 'BV300', image: 'images/CIELO-FALSO-PVC/BV258.jpg' },
                { name: 'BV300-B', image: 'images/CIELO-FALSO-PVC/BV300.jpg' },
                { name: 'BV301', image: 'images/CIELO-FALSO-PVC/BV301.jpg' },
                { name: 'BV303', image: 'images/TBD1.jpg' },
                { name: 'BV350', image: 'images/TBD1.jpg' },
                { name: 'BV351', image: 'images/TBD1.jpg' },
                { name: 'BV352', image: 'images/TBD1.jpg' },
                { name: 'BV353', image: 'images/TBD1.jpg' },
                { name: 'BV354', image: 'images/CIELO-FALSO-PVC/BV354.jpg' },
                { name: 'BV354-H', image: 'images/CIELO-FALSO-PVC/BV354.jpg' },
                { name: 'BV355', image: 'images/CIELO-FALSO-PVC/BV355.jpg' },
                { name: 'BV355-H', image: 'images/CIELO-FALSO-PVC/BV355.jpg' },
                { name: 'PB300-B', image: 'images/TBD1.jpg' },
                { name: 'PB300M', image: 'images/TBD1.jpg' },
                { name: 'PB301', image: 'images/TBD1.jpg' },
                { name: 'PB302', image: 'images/TBD1.jpg' },
                { name: 'PB303', image: 'images/TBD1.jpg' },
                { name: 'PB305', image: 'images/TBD1.jpg' },
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