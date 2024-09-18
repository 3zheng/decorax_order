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
                { name: 'D003-1', image: 'images/TBD1.jpg' },
                { name: 'D017', image: 'images/The-3D/LAMINA-3D/D017.jpg' },
                { name: 'D078', image: 'images/The-3D/LAMINA-3D/D078.jpg' },
                { name: 'D088', image: 'images/TBD1.jpg' },
                { name: 'D091', image: 'images/TBD1.jpg' },
                { name: 'D094', image: 'images/The-3D/LAMINA-3D/D094.jpg' },
                { name: 'D094-ML', image: 'images/The-3D/LAMINA-3D/D094-ML.jpg' },
                { name: 'D095', image: 'images/The-3D/LAMINA-3D/D095.jpg' },
                { name: 'D099', image: 'images/TBD1.jpg' },
                { name: 'D100', image: 'images/The-3D/LAMINA-3D/D100.jpg' },
                { name: 'D106', image: 'images/The-3D/LAMINA-3D/D106.jpg' },
                { name: 'D111', image: 'images/TBD1.jpg' },
                { name: 'D124', image: 'images/The-3D/LAMINA-3D/D124.jpg' },
                { name: 'D125', image: 'images/TBD1.jpg' },
                { name: 'D137', image: 'images/The-3D/LAMINA-3D/D137.jpg' },
                { name: 'D140', image: 'images/The-3D/LAMINA-3D/D140.jpg' },
                { name: 'D142', image: 'images/The-3D/LAMINA-3D/D142.jpg' },
                { name: 'D143', image: 'images/The-3D/LAMINA-3D/D143.jpg' },
                { name: 'D146', image: 'images/The-3D/LAMINA-3D/D146.jpg' },
                { name: 'D147', image: 'images/The-3D/LAMINA-3D/D147.jpg' },
                { name: 'D151', image: 'images/The-3D/LAMINA-3D/D151.jpg' },
                { name: 'D153', image: 'images/The-3D/LAMINA-3D/D153.jpg' },
                { name: 'D154', image: 'images/The-3D/LAMINA-3D/D154.jpg' },
                { name: 'D156', image: 'images/The-3D/LAMINA-3D/D156.jpg' },
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