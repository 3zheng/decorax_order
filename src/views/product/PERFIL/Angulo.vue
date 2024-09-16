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
                { name: 'ANGULO-3 (0,45)', image: 'images/PERFIL/ANGULO.png' },
                { name: 'ANGULO-3 (35-0.45)', image: 'images/PERFIL/ANGULO.png' },
                { name: 'CONERBEAD-3 (0,45)', image: 'images/PERFIL/ANGULO.png' },
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