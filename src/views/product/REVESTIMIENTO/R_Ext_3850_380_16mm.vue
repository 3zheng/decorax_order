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
                { name: 'RPE-01', image: 'images/REVESTIMIENTO/RPE-01.jpg' },                
                { name: 'RPE-02', image: 'images/REVESTIMIENTO/RPE-02.jpg' },
                { name: 'RPE-03', image: 'images/REVESTIMIENTO/RPE-03.jpg' },
                { name: 'RPE-04', image: 'images/REVESTIMIENTO/RPE-04.jpg' },
                { name: 'RPE-05', image: 'images/REVESTIMIENTO/RPE-05.jpg'},
                { name: 'RPE-06', image: 'images/REVESTIMIENTO/RPE-06.jpg' },
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