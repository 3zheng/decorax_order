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
                { name: 'JC-03', image: 'images/The-3D/ADHESIVO-EN-ROLLO/JC-03.png' },
                { name: 'JC-04', image: 'images/The-3D/ADHESIVO-EN-ROLLO/JC-04.jpg' },
                { name: 'JC-05', image: 'images/The-3D/ADHESIVO-EN-ROLLO/JC-05.png' },
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