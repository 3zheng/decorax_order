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
                { name: 'AF-01-B', image: 'images/CORNISA/AF-01-B.jpg' },
                { name: 'AF-01-M', image: 'images/CORNISA/AF-01-M.jpg' },
                { name: 'AF-02', image: 'images/TBD1.jpg' },
                { name: 'AF-03', image: 'images/TBD1.jpg' },
                { name: 'AF-04', image: 'images/TBD1.jpg' },
                { name: 'AF-05', image: 'images/TBD1.jpg' },
                { name: 'AF-06', image: 'images/TBD1.jpg' },
                { name: 'AF-07', image: 'images/TBD1.jpg' },
                { name: 'UA-C91', image: 'images/TBD1.jpg' },
                { name: 'UA-R224', image: 'images/TBD1.jpg' },
                { name: 'UA-R585', image: 'images/TBD1.jpg' },
                { name: 'UA-R767', image: 'images/TBD1.jpg' },
                { name: 'UA-R781', image: 'images/TBD1.jpg' },
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