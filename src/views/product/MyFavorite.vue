<template>
    <div>
        <ProductList :products="products" :parentName="myName" @viewProduct="viewProductDetail" />
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    //name: 'MyFavorite',
    components: {
        ProductList
    },
    data() {
        return {
            myName : "MyFavorite",
            products: [
                { name: '4-AB', image: 'images/FERRETERIA/4-AB.png' },
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