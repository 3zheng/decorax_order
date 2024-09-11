<template>
    <div>
        <ProductList :products="products" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Bisagra4',
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: '4-AB', image: 'images/FERRETERIA/4-AB.png' },
                { name: '4-AC', image: 'images/FERRETERIA/4-AC.png' },
                { name: '4-SN', image: 'images/FERRETERIA/4-SN.png' },
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