<!-- ProductList.vue -->
<template>
    <el-row :gutter="20">
        <el-col :span="6" v-for="(product, index) in products" :key="index">
            <el-card :body-style="{ padding: '0px' }">
                <img :src="product.image" class="image" />
                <div style="padding: 14px;">
                    <span>{{ product.name }}</span>
                    <div class="bottom clearfix">
                        <el-input-number v-model="nums[index]" @change="handleChange" :min="1" :max="9999999" label="描述文字"></el-input-number>
                        <div class="row-button">
                            <!-- Añadir a la cesta加入购物车 Eliminar favorita移出收藏-->
                            <el-button type="primary" size="mini" icon="el-icon-shopping-cart-2" @click="onAddToCart(product, index)" style="margin-top: 10px;">加入购物车</el-button>
                            <el-button v-if="isCommon" type="warning" size="mini" icon="el-icon-star-off" @click="onAddToFavorite(product, index)" style="margin-top: 10px;" circle></el-button>
                        </div>
                        <el-button v-if="isFavorite" type="danger" size="mini" icon="el-icon-delete-solid" @click="onRemoveFromFavorite(product, index)" style="margin-top: 10px;">移出收藏</el-button>
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
            required: true,
        },
        parentName:{
            type: String,
            required: false,
        },
    },
    data(){
        return{
            nums: [],
            isCommon: true,
            isFavorite: false,
        };
    },
    created(){
        this.nums = this.products.map(() => 1); //创建一个元素个数为products.length，初始值为1的数组
        console.log(`parent name = ${this.parentName}`)
        if (this.parentName == 'MyFavorite'){
            //如果是MyFavorite页面，那么应该显示“取消收藏”按钮，隐藏“收藏按钮”
            console.log("MyFavorite页面")
            this.isFavorite = true
            this.isCommon = false
        }else{
            this.isFavorite = false
            this.isCommon = true
        }
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        onAddToCart(product, index) {
            //alert(`index=${index}`);
            //发送弹窗通知
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
        onAddToFavorite(product, index){
            //加入收藏
            alert("onAddToFavorite");
            let favorite = this.$store.getters.getFavorite;
            favorite.set(product.name, product.image); //修改或者新增键值对
            this.$store.commit('updateFavorite', favorite); //更新vuex store里的全局变量
            const message = `商品${product.name}已添加到我的收藏`;
            this.SendFavoriteRequire(favorite, message);
        },
        onRemoveFromFavorite(product, index){
            //移出收藏
            let favorite = this.$store.getters.getFavorite;
            favorite.delete(product.name)
            this.$store.commit('updateFavorite', favorite); //更新vuex store里的全局变量
            this.products.splice(index, 1)  //删除数组下标为index的products元素
            const message = `商品${product.name}已从我的收藏移出`;
            this.SendFavoriteRequire(favorite, message);
        },
        SendFavoriteRequire(favorite, message){
            alert("发送favorite")
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                url: "/api/favorite",
                //params:{} //params是作为URL里的查询参数传递
                data: {
                    operation: "favorite",
                    UserID: this.$store.getters.getUserID,
                    Favorite: Object.fromEntries(favorite),  // 将 Map 转换为对象 
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                },
            })
                .then((repos) => {
                    //console.log(repos.data);
                    if (repos.data.Success == 'true'){
                        this.$notify({
                            title: '成功',
                            message: message,
                            type: 'success',
                        });
                    }else{
                        this.$notify({
                            title: '失败',
                            message: `服务器忙，请稍后再试`,
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log("axios error: ", error);
                });
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
    flex-direction: column; /*  设置为纵向排列 */
    align-items: center; /* 子元素在容器中水平居中 */
    justify-content: center; /* 子元素在容器中垂直居中 */
}

.row-button{
    flex-direction: row; /*  设置为横线向排列 */
}

</style>