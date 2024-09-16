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
                { name: 'PF01C', image: 'images/PISO/PF01.png' },
                { name: 'PF02', image: 'images/PISO/PF02.png' },
                { name: 'PF02C', image: 'images/PISO/PF02.png' },
                { name: 'PF03', image: 'images/PISO/PF03.png' },
                { name: 'PF03C', image: 'images/PISO/PF03.png' },
                { name: 'PF04', image: 'images/PISO/PF04.png' },
                { name: 'PF04C', image: 'images/PISO/PF04.png' },
                { name: 'PF05', image: 'images/PISO/PF05.png' },
                { name: 'PF05C', image: 'images/PISO/PF05.png' },
                { name: 'PF06C', image: 'images/PISO/PF06.png' },
                { name: 'PF07C', image: 'images/PISO/PF07.png' },
                { name: 'PF08C', image: 'images/PISO/PF08.png' },
                { name: 'PF09C', image: 'images/PISO/PF09.png' },
                { name: 'PF09 SPC', image: 'images/PISO/PF09.png' },
                { name: 'PF10', image: 'images/PISO/PF10.jpg' },
                { name: 'PF10C', image: 'images/PISO/PF10.jpg' },
                { name: 'PF11C', image: 'images/TBD1.jpg' },
                { name: 'PF11 SPC', image: 'images/TBD1.jpg' },
                { name: 'PF12C', image: 'images/PISO/PF12.png' },
                { name: 'PF12 SPC', image: 'images/PISO/PF12.png' },
                { name: 'PF13', image: 'images/PISO/PF13.jpg' },
                { name: 'PF14', image: 'images/PISO/PF14.png' },
                { name: 'PF15', image: 'images/PISO/PF15.png' },
                { name: 'PF16', image: 'images/TBD1.jpg' },
                { name: 'PF17', image: 'images/TBD1.jpg' },
                { name: 'PF18', image: 'images/TBD1.jpg' },
                { name: 'PF19', image: 'images/PISO/PF19.png' },
                { name: 'PF20', image: 'images/TBD1.jpg' },
                { name: 'PF21', image: 'images/PISO/PF21.png' },
                { name: 'PF22', image: 'images/TBD1.jpg' },
                { name: 'PF23', image: 'images/PISO/PF23.png' },
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