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
                { name: 'BV202-25', image: 'images/CIELO-FALSO-PVC/BV202-25.jpg' },
                { name: 'BV250-B1', image: 'images/CIELO-FALSO-PVC/BV250.jpg' },
                { name: 'BV250-B2', image: 'images/CIELO-FALSO-PVC/BV250.jpg' },
                { name: 'BV250-M2', image: 'images/CIELO-FALSO-PVC/BV250-M2.jpg' },
                { name: 'BV2500', image: 'images/TBD1.jpg' },
                { name: 'BV2501', image: 'images/CIELO-FALSO-PVC/BV2501.png' },
                { name: 'BV2502', image: 'images/CIELO-FALSO-PVC/BV2502.jpg' },
                { name: 'BV2503', image: 'images/CIELO-FALSO-PVC/BV2503.jpg' },
                { name: 'BV2504', image: 'images/CIELO-FALSO-PVC/BV2504.jpg' },
                { name: 'BV2505', image: 'images/CIELO-FALSO-PVC/BV2505.png' },
                { name: 'BV2506', image: 'images/CIELO-FALSO-PVC/BV2506.png' },
                { name: 'BV251', image: 'images/CIELO-FALSO-PVC/BV251.jpg' },
                { name: 'BV2510', image: 'images/CIELO-FALSO-PVC/BV2510.jpg' },
                { name: 'BV2512', image: 'images/CIELO-FALSO-PVC/BV2512.jpg' },
                { name: 'BV2513', image: 'images/CIELO-FALSO-PVC/BV2513.jpg' },
                { name: 'BV2514', image: 'images/CIELO-FALSO-PVC/BV2514.jpg' },
                { name: 'BV2515', image: 'images/TBD1.jpg' },
                { name: 'BV2517', image: 'images/TBD1.jpg' },
                { name: 'BV252', image: 'images/CIELO-FALSO-PVC/BV252.jpg' },
                { name: 'BV2522', image: 'images/CIELO-FALSO-PVC/BV2522.jpg' }, 
                { name: 'BV2522-6', image: 'images/CIELO-FALSO-PVC/BV2522.jpg' },              
                { name: 'BV2524', image: 'images/CIELO-FALSO-PVC/BV2524.jpg' },                
                { name: 'BV2525', image: 'images/CIELO-FALSO-PVC/BV2525.jpg' },
                { name: 'BV2526', image: 'images/CIELO-FALSO-PVC/BV2526.jpg' },
                { name: 'BV2527', image: 'images/TBD1.jpg' },
                { name: 'BV2528', image: 'images/TBD1.jpg' },
                { name: 'BV2529', image: 'images/TBD1.jpg' },
                { name: 'BV253', image: 'images/CIELO-FALSO-PVC/BV253.jpg' },
                { name: 'BV253-5M', image: 'images/CIELO-FALSO-PVC/BV253.jpg' },
                { name: 'BV253-H', image: 'images/CIELO-FALSO-PVC/BV253.jpg' },
                { name: 'BV2531', image: 'images/TBD1.jpg' },
                { name: 'BV2531-6', image: 'images/TBD1.jpg' },
                { name: 'BV2532', image: 'images/TBD1.jpg' },
                { name: 'BV2536', image: 'images/CIELO-FALSO-PVC/BV2536.jpg' },
                { name: 'BV2538', image: 'images/TBD1.jpg' },
                { name: 'BV254', image: 'images/CIELO-FALSO-PVC/BV254.jpg' },
                { name: 'BV254-A', image: 'images/CIELO-FALSO-PVC/BV254.jpg' },
                { name: 'BV254-H', image: 'images/CIELO-FALSO-PVC/BV254.jpg' },
                { name: 'BV2541', image: 'images/TBD1.jpg' },
                { name: 'BV2543', image: 'images/TBD1.jpg' },
                { name: 'BV2545', image: 'images/CIELO-FALSO-PVC/BV2545.jpg' },
                { name: 'BV2548', image: 'images/TBD1.jpg' },
                { name: 'BV2548-6', image: 'images/TBD1.jpg' },
                { name: 'BV255', image: 'images/CIELO-FALSO-PVC/BV255.jpg' },
                { name: 'BV255-A', image: 'images/CIELO-FALSO-PVC/BV255.jpg' },
                { name: 'BV255-H', image: 'images/CIELO-FALSO-PVC/BV255.jpg' },
                { name: 'BV2550', image: 'images/TBD1.jpg' },
                { name: 'BV2553', image: 'images/TBD1.jpg' },
                { name: 'BV2555', image: 'images/TBD1.jpg' },
                { name: 'BV2557', image: 'images/TBD1.jpg' },
                { name: 'BV2557-H', image: 'images/TBD1.jpg' },
                { name: 'BV2557N-W', image: 'images/TBD1.jpg' },
                { name: 'BV2557N-W-H', image: 'images/TBD1.jpg' },
                { name: 'BV2559', image: 'images/CIELO-FALSO-PVC/BV2559.jpg' },
                { name: 'BV256', image: 'images/CIELO-FALSO-PVC/BV256.jpg' },
                { name: 'BV2560', image: 'images/CIELO-FALSO-PVC/BV2560.jpg' },
                { name: 'BV2561', image: 'images/CIELO-FALSO-PVC/BV2561.png' },
                { name: 'BV2562', image: 'images/CIELO-FALSO-PVC/BV2562.jpg' },
                { name: 'BV2563', image: 'images/CIELO-FALSO-PVC/BV2563.jpg' },
                { name: 'BV2564', image: 'images/TBD1.jpg' },
                { name: 'BV2565', image: 'images/TBD1.jpg' },
                { name: 'BV2567', image: 'images/TBD1.jpg' },
                { name: 'BV257', image: 'images/TBD1.jpg' },
                { name: 'BV2570', image: 'images/TBD1.jpg' },
                { name: 'BV2571', image: 'images/TBD1.jpg' },
                { name: 'BV2572', image: 'images/CIELO-FALSO-PVC/BV2572.jpg' },
                { name: 'BV2573-H', image: 'images/TBD1.jpg' },
                { name: 'BV258', image: 'images/CIELO-FALSO-PVC/BV258.jpg' },
                { name: 'BV259', image: 'images/CIELO-FALSO-PVC/BV259.jpg' },
                { name: 'BV2590-H', image: 'images/TBD1.jpg' },
                { name: 'BV2592', image: 'images/TBD1.jpg' },
                { name: 'BV2592-A', image: 'images/TBD1.jpg' },
                { name: 'BV2592-H', image: 'images/TBD1.jpg' },
                { name: 'BV2593', image: 'images/TBD1.jpg' },
                { name: 'BV2593-H', image: 'images/TBD1.jpg' },
                { name: 'BV2594', image: 'images/TBD1.jpg' },
                { name: 'BV2595', image: 'images/TBD1.jpg' },
                { name: 'BV2595-A', image: 'images/TBD1.jpg' },
                { name: 'BV2595-H', image: 'images/TBD1.jpg' },
                { name: 'BV2598-H', image: 'images/TBD1.jpg' },
                { name: 'BV2599', image: 'images/TBD1.jpg' },
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