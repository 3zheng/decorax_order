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
                { name: 'WP-01', image: 'images/REVESTIMIENTO/WP-01.jpg' },                
                { name: 'WP-02', image: 'images/REVESTIMIENTO/WP-02.jpg' },
                { name: 'WP-03', image: 'images/REVESTIMIENTO/WP-03.jpg' },                
                { name: 'WP-04', image: 'images/REVESTIMIENTO/WP-04.jpg' },
                { name: 'WP-07', image: 'images/REVESTIMIENTO/WP-07.jpg' },                
                { name: 'WP-08', image: 'images/REVESTIMIENTO/WP-08.jpg' },
                { name: 'WP-09', image: 'images/REVESTIMIENTO/WP-09.jpg' },                
                { name: 'WP-10', image: 'images/REVESTIMIENTO/WP-10.jpg' },
                { name: 'WP-13', image: 'images/REVESTIMIENTO/WP-13.jpg' },                
                { name: 'WP-16', image: 'images/REVESTIMIENTO/WP-16.jpg' },
                { name: 'WP-19', image: 'images/REVESTIMIENTO/WP-19.jpg' },                
                { name: 'WP-20', image: 'images/REVESTIMIENTO/WP-20.jpg' },
                { name: 'WP-21', image: 'images/REVESTIMIENTO/WP-21.jpg' },                
                { name: 'WP-22', image: 'images/REVESTIMIENTO/WP-22.jpg' },
                { name: 'WPN-01', image: 'images/REVESTIMIENTO/WPN-01.jpg' },                
            
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