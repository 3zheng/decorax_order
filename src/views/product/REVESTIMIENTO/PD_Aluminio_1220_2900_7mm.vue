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
                { name: 'NA-02', image: 'images/REVESTIMIENTO/NA-02.jpg' }, 
                { name: 'NA-04', image: 'images/REVESTIMIENTO/NA-04.jpg' },              
                { name: 'NA-05', image: 'images/REVESTIMIENTO/NA-05.jpg' },
                { name: 'NA-06', image: 'images/REVESTIMIENTO/NA-06.jpg' },
                { name: 'NA-07', image: 'images/REVESTIMIENTO/NA-07.jpg' },
                { name: 'NA-08', image: 'images/REVESTIMIENTO/NA-08.jpg' }, 
                { name: 'NA-09', image: 'images/REVESTIMIENTO/NA-09.jpg' },
                
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