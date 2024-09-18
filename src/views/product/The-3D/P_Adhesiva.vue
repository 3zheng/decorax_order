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
                { name: 'C197-1', image: 'images/TBD1.jpg' },
                { name: 'D001-1', image: 'images/TBD1.jpg' },
                { name: 'D005-1', image: 'images/TBD1.jpg' },
                { name: 'D010-2', image: 'images/TBD1.jpg' },
                { name: 'KN-001', image: 'images/TBD1.jpg' },
                { name: 'KN-002', image: 'images/TBD1.jpg' },
                { name: 'KN-003', image: 'images/TBD1.jpg' },
                { name: 'KN-C0008-3', image: 'images/TBD1.jpg' },
                { name: 'KN-C0014-2', image: 'images/TBD1.jpg' },
                { name: 'KN-C0019-1', image: 'images/TBD1.jpg' },
                { name: 'KN-C0022-1', image: 'images/TBD1.jpg' },
                { name: 'KN-C0024-1', image: 'images/TBD1.jpg' },
                { name: 'KN-C0024-2', image: 'images/TBD1.jpg' },
                { name: 'KN-C0024-3', image: 'images/TBD1.jpg' },
                { name: 'KN-C0024-4', image: 'images/TBD1.jpg' },
                { name: 'KN-C0026-1', image: 'images/TBD1.jpg' },
                { name: 'KN-C0026-2', image: 'images/TBD1.jpg' },
                { name: 'KN-C0026-3', image: 'images/TBD1.jpg' },
                { name: 'KN-C0027-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0004-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0004-2', image: 'images/TBD1.jpg' },
                { name: 'KN-M0007-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0011-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0011-2', image: 'images/TBD1.jpg' },
                { name: 'KN-M0011-3', image: 'images/TBD1.jpg' },
                { name: 'KN-M0011-4', image: 'images/TBD1.jpg' },
                { name: 'KN-M0014-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0018-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0023-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0023-2', image: 'images/TBD1.jpg' },
                { name: 'KN-M0024-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0025-2', image: 'images/TBD1.jpg' },
                { name: 'KN-M0028-2', image: 'images/TBD1.jpg' },
                { name: 'KN-M0029-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0030-4', image: 'images/TBD1.jpg' },
                { name: 'KN-M0038-1', image: 'images/TBD1.jpg' },
                { name: 'KN-M0038-3', image: 'images/TBD1.jpg' },
                { name: 'KN-W0001-1', image: 'images/TBD1.jpg' },
                { name: 'KN-W0001-2', image: 'images/TBD1.jpg' },
                { name: 'KN-W0001-3', image: 'images/TBD1.jpg' },
                { name: 'KN-W0001-4', image: 'images/TBD1.jpg' },
                { name: 'KN-W0002-1', image: 'images/TBD1.jpg' },
                { name: 'KN-W0002-2', image: 'images/TBD1.jpg' },
                { name: 'KN-W0003-4', image: 'images/TBD1.jpg' },
                { name: 'KN-W0004-3', image: 'images/TBD1.jpg' },
                { name: 'KN-W0009-2', image: 'images/TBD1.jpg' },
                { name: 'KN-W0020-1', image: 'images/TBD1.jpg' },
                { name: 'KN-W0028-1', image: 'images/TBD1.jpg' },
                { name: 'KN-W0028-3', image: 'images/TBD1.jpg' },
                { name: 'KN-W0031-1', image: 'images/TBD1.jpg' },
                { name: 'KN-W0033-4', image: 'images/TBD1.jpg' },
                { name: 'KN-W0034-4', image: 'images/TBD1.jpg' },
                { name: 'KN-W0038-2', image: 'images/TBD1.jpg' },
                { name: 'KN-X0033-1', image: 'images/TBD1.jpg' },
                { name: 'KN-X0070-1', image: 'images/TBD1.jpg' },
                { name: 'KN-X0182-1', image: 'images/TBD1.jpg' },
                { name: 'KN-X0195-3', image: 'images/TBD1.jpg' },
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