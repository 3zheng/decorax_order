<!-- ProductList.vue -->
<template>
    <el-row :gutter="20">
        <el-col :span="6" v-for="(product, index) in products" :key="index">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="product.image" class="image" />
                <div style="padding: 14px;">
                    <span>{{ product.name }}</span>
                    <div class="bottom clearfix">
                        <el-input-number v-model="nums[index]" @change="handleChange" :min="1" :max="1000000" label="描述文字"></el-input-number>
                        <el-button type="primary" @click="handleClick(product, index)" style="margin-top: 10px;">添加到购物车</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

export default {
    props: {
        products: {
            type: Array,
            required: true
        },
    },
    data(){
        return{
            nums: [],
        };
    },
    created(){
        this.nums = this.products.map(() => 1);
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        handleClick(product, index) {
            //alert(`index=${index}`);
            this.$notify({
                title: '成功',
                message: `商品${product.name}共计${this.nums[index]}个已添加到购物车`,
                type: 'success',
            });
            
            //this.$store.dispatch调用异步方法action,this.$store.commit调用同步方法mutation
            let cart = this.$store.getters.getCart;
            let num = 0;
            if (cart.has(product.name)){
                //已存在相应的商品
                num = cart.get(product.name);
            }
            num += this.nums[index];    //和原有的数量累加
            cart.set(product.name, num); //修改或者新增键值对
            this.$store.commit('updateCart', cart); //更新vuex store里的全局变量
            this.$emit('viewProduct', product); //暂时用不上，留着接口方法，可供父组件调用
            
        },
    },
};
</script>

<style scoped>
.image {
    width: 100%; /*100%是拉伸到100%*/
    height: 200px; /* 你可以根据需要调整高度 */
    display: block;
}

.bottom {
    display: flex;
    flex-direction: column; /* 设置为纵向排列 */
    align-items: center; /* 子元素在容器中水平居中 */
    justify-content: center; /* 子元素在容器中垂直居中 */
}
</style>