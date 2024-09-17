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
                { name: '6031', image: 'images/The-3D/LAMINA-MARMOLADA-AUTO-ADHESIVA/6031.png' },
                { name: '6156', image: 'images/The-3D/LAMINA-MARMOLADA-AUTO-ADHESIVA/6156.png' },
                { name: '6180-3', image: 'images/TBD1.jpg' },
                { name: '6191', image: 'images/The-3D/LAMINA-MARMOLADA-AUTO-ADHESIVA/6191.png' },
                { name: 'YP103', image: 'images/The-3D/LAMINA-MARMOLADA-AUTO-ADHESIVA//YP-103.png' },
                { name: 'YP104', image: 'images/The-3D/LAMINA-MARMOLADA-AUTO-ADHESIVA//YP-104.png' },
                { name: 'YP108', image: 'images/TBD1.jpg' },
                { name: 'YP-30', image: 'images/TBD1.jpg' },
                { name: 'YP-44', image: 'images/TBD1.jpg' },
                { name: 'YP-76', image: 'images/TBD1.jpg' },
                { name: 'YP-95', image: 'images/TBD1.jpg' },
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