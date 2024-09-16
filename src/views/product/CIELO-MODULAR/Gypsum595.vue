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
                { name: 'GS-154', image: 'images/CIELO-MODULAR/GS-154.png' },
                { name: 'GS-238', image: 'images/CIELO-MODULAR/GS-238.png' },
                { name: 'GS-975', image: 'images/CIELO-MODULAR/GS-975.png' },
                { name: 'GS-996', image: 'images/CIELO-MODULAR/GS-996.png' },
                { name: 'GS-2034-1', image: 'images/TBD1.jpg' },
                { name: 'GS-2034-2', image: 'images/TBD1.jpg' },
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