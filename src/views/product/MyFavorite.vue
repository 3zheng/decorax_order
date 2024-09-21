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
            products: [],
        };
    },
    created(){
        for (let [key,value] of this.$store.getters.getFavorite){
            const obj = {name: key, image: value};
            this.products.push(obj)
        }
    },
    methods: {
        viewProductDetail(product) {
            console.log('查看商品详情:', product);
            // 处理查看详情逻辑
        }
    }
};
</script>