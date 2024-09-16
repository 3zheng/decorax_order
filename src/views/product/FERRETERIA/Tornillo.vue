<template>
    <div>
        <ProductList :products="products" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    name: 'Tornillo',
    components: {
        ProductList
    },
    data() {
        return {
            products: [
                { name: 'TORNILLO A', image: 'images/FERRETERIA/4-AB.png' },
                { name: 'TORNILLO N', image: 'images/FERRETERIA/4-AC.png' },
                { name: 'TORNILLO T2', image: 'images/TBD1.jpg' },
                { name: 'TORNILLO T2-1', image: 'images/TBD1.jpg' },
                { name: 'TORNILLO A-1000', image: 'images/TBD1.jpg' },
                { name: 'T2-T', image: 'images/TBD1.jpg' },
                { name: 'T2-TB', image: 'images/TBD1.jpg' },
                { name: 'T2-TB-L', image: 'images/TBD1.jpg' },
                { name: 'T2-TC-L', image: 'images/TBD1.jpg' },
                { name: 'T2-T-L', image: 'images/TBD1.jpg' },              
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