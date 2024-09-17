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
                { name: 'BV1201', image: 'images/REVESTIMIENTO/BV1201.png' },                
                { name: 'BV1202', image: 'images/REVESTIMIENTO/BV1202.jpg' },
                { name: 'BV1203', image: 'images/REVESTIMIENTO/BV1203.png' },
                { name: 'BV1204', image: 'images/REVESTIMIENTO/BV1204.png' },
                { name: 'BV1205', image: 'images/REVESTIMIENTO/BV1205.png' },
                { name: 'BV1206', image: 'images/REVESTIMIENTO/BV1206.png' },
                { name: 'BV1207', image: 'images/REVESTIMIENTO/BV1207.png' },
                { name: 'BV1208', image: 'images/REVESTIMIENTO/BV1208.png' },
                { name: 'BV1209', image: 'images/REVESTIMIENTO/BV1209.png' },
                { name: 'BV1210', image: 'images/REVESTIMIENTO/BV1210.png' },
                { name: 'BV1211', image: 'images/REVESTIMIENTO/BV1211.png' },
                { name: 'BV1212', image: 'images/REVESTIMIENTO/BV1212.png' },
                { name: 'BV1213', image: 'images/REVESTIMIENTO/BV1213.png' },
                { name: 'BV1219', image: 'images/TBD1.jpg' },
                { name: 'BV1220', image: 'images/TBD1.jpg' },
                { name: 'BV1221', image: 'images/TBD1.jpg' },
                { name: 'BV1222', image: 'images/TBD1.jpg' },
                { name: 'BV1223', image: 'images/TBD1.jpg' },
                { name: 'BV1224', image: 'images/TBD1.jpg' },
                { name: 'BV1225', image: 'images/TBD1.jpg' },
                { name: 'BV1226', image: 'images/TBD1.jpg' },
                { name: 'BV1227', image: 'images/TBD1.jpg' },
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