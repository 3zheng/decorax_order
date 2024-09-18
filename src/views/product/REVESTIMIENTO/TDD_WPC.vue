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
                { name: 'TC-01', image: 'images/REVESTIMIENTO/TC-01-TD-01.png' },                
                { name: 'TC-02', image: 'images/REVESTIMIENTO/TC-02-TD-02.png' },
                { name: 'TC-07', image: 'images/REVESTIMIENTO/TC-07-TD-07.png' },
                { name: 'TC-09', image: 'images/REVESTIMIENTO/TC-09-TD-09.png' },
                { name: 'TD-01', image: 'images/REVESTIMIENTO/TC-01-TD-01.png' },
                { name: 'TD-02', image: 'images/REVESTIMIENTO/TC-02-TD-02.png' },
                { name: 'TD-07', image: 'images/REVESTIMIENTO/TC-07-TD-07.png' },
                { name: 'TD-09', image: 'images/REVESTIMIENTO/TC-09-TD-09.png' },
                { name: 'WPF-01', image: 'images/REVESTIMIENTO/WPF-01.jpg' },
                { name: 'WPF-03', image: 'images/REVESTIMIENTO/WPF-03.jpg' },
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