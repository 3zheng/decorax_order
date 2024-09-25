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
            myName: "MyFavorite",
            products: [],
        };
    },
    async created() {
        await this.getData();
        for (let [key, value] of this.$store.getters.getFavorite) {
            const obj = { name: key, image: value };
            this.products.push(obj)
        }
    },
    methods: {
        viewProductDetail(product) {
            console.log('查看商品详情:', product);
            // 处理查看详情逻辑
        },
        /*
        beforeRouteEnter: (to, from, next) => {
            //alert("进入Debt路由");
            next((vm) => {
                vm.getData();
            });
        },
        */

        async getData() {
            //alert("开始login")
            let formData = new FormData();
            formData.append('UserName', 'admin');
            formData.append('Password', 'hello+world');
            const repos = await this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                //url: "http://35.203.42.244:31111/api/debt_daily", //通过ngnix反向代理
                //url: "http://104.225.234.236:31111/api/debt_daily", //通过ngnix反向代理
                url: "/api/login",
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (repos.data.Success == "true") {
                //alert("login成功")
                console.log(`Address = ${repos.data.AnyBody.Address}, UserName = ${repos.data.AnyBody.UserName}, 
                        UserID = ${repos.data.AnyBody.UserID}, Favorite = ${repos.data.AnyBody.Favorite}`)
                this.$store.commit('updateAddress', repos.data.AnyBody.Address); //更新vuex store里的全局变量
                if (repos.data.AnyBody.RemarkName != ''){
                    this.$store.commit('updateUserName', repos.data.AnyBody.RemarkName); //把备用名赋值给UserName
                }else{
                    this.$store.commit('updateUserName', repos.data.AnyBody.UserName); 
                }
                
                this.$store.commit('updateUserID', repos.data.AnyBody.UserID);
                const favorite = new Map(Object.entries(repos.data.AnyBody.Favorite));
                this.$store.commit('updateFavorite', favorite);
                //this.$forceUpdate() //重新渲染组件，开销小
                //window.location.reload() //重新刷新整个浏览器窗口，开销大
            } else {
                this.$notify({
                    title: '失败',
                    message: `login失败`,
                    type: 'error',
                });
            }
            /*
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                //url: "http://35.203.42.244:31111/api/debt_daily", //通过ngnix反向代理
                //url: "http://104.225.234.236:31111/api/debt_daily", //通过ngnix反向代理
                url: "/api/login",
                data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            })
                .then((repos) => {
                    //console.log(repos.data);
                    if (repos.data.Success == "true") {
                        alert("login成功")
                        console.log(`Address = ${repos.data.AnyBody.Address}, UserName = ${repos.data.AnyBody.UserName}, 
                        UserID = ${repos.data.AnyBody.UserID}, Favorite = ${repos.data.AnyBody.Favorite}`)
                        this.$store.commit('updateAddress', repos.data.AnyBody.Address); //更新vuex store里的全局变量
                        this.$store.commit('updateUserName', repos.data.AnyBody.UserName);
                        this.$store.commit('updateUserID', repos.data.AnyBody.UserID);
                        const favorite = new Map(Object.entries(repos.data.AnyBody.Favorite));
                        this.$store.commit('updateFavorite', favorite);
                        this.$forceUpdate() //重新渲染组件，开销小
                        //window.location.reload() //重新刷新整个浏览器窗口，开销大
                    } else {
                        this.$notify({
                            title: '失败',
                            message: `login失败`,
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
                */
        },
    },
};
</script>