<template>
    <div>
        <el-container>
            <el-header>
                <div>
                    <router-link to="/" class="home-link">返回首页</router-link>
                </div>
                <div>
                    <el-button type="primary" icon="el-icon-edit" @click="onUserInfo">修改个人资料</el-button>
                </div>
            </el-header>
            <el-main>
                <el-table :data="showData" border style="width: 100%" size="mini">
                    <el-table-column label="Número De Serie" width="70">
                        <template slot="header">序号</template>
                        <template slot-scope="scope">{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column prop="UserName" label="用户名" width="160"></el-table-column>
                    <el-table-column prop="ProductID" label="产品ID" width="150"> </el-table-column>
                    <el-table-column prop="SubCategory" label="子类" width="300"></el-table-column>
                    <el-table-column prop="Address" label="收货地址" width="250"></el-table-column>
                    <el-table-column prop="ProductNum" width="110">
                        <template slot="header">订购数量</template>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" circle
                                @click="onModifyOrder(scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <el-form :inline="true">
                    <el-row style="margin-top: 10px">
                        <el-col :span="18" style="text-align: left; margin-top: 0px">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage" :page-sizes="[5, 10, 20, 50]" :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper" :total="searchTotal">
                            </el-pagination>
                        </el-col>
                        <el-col :span="5" style="text-align: right; margin-top: 0px">
                            <el-button type="primary" icon="el-icon-s-claim" @click="onSubmitOrders">提交订单</el-button>
                        </el-col>
                    </el-row>
                </el-form>
                <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </el-main>
            <el-footer style="line-height: 30px; height: 30px">Footer</el-footer>
        </el-container>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
    name: "cart",
    data() {
        return {
            //pr1: 0,
            //pr2: '',
            dialogVisible: false,   //是否显示对话框

            isGetall: false,   //是否已经获取了全部数据，避免全部获取的数据先到，部分获取的数据覆盖了全部获取
            searchData: [],
            searchTotal: 0,
            totalData: [],  //从后台获取的所有数据
            showData: [],    //当前显示的数据
            pageSize: 5, //每页展示的数据个数
            currentPage: 1,  //当前页
        };
    },

    beforeRouteEnter: (to, from, next) => {
        //alert("进入InventorySummary路由");
        next((vm) => {
            vm.getAllData();
        });
    },

    methods: {
        onUserInfo() {
            //alert('userinfo')
            this.$router.push({ name: 'userinfo' })
        },
        getAllData() {
            const cart = this.$store.getters.getCart;
            const username = this.$store.getters.getUserName;
            const dict = this.$store.getters.getProductDict;
            const address = this.$store.getters.getAddress[0];  //getAddress[0]是默认地址
            const userid = this.$store.getters.getUserID;
        
            for (let [key, value] of cart) {
                if (!dict.has(key)) {
                    //产品字典里不存在
                    alert(`产品${key}在字典表里找不到，联系开发人员更新字典表`);
                }
                const subCategory = dict.get(key);
                const obj = {
                    UserName: username,
                    UserID: userid,
                    ProductID: key,
                    SubCategory: subCategory,
                    Address: address,
                    ProductNum: value,
                    OrderDate: '',
                };
                this.totalData.push(obj);
            }
            this.searchData = this.totalData;
            this.searchTotal = this.searchData.length;
            this.changeShowPage();
        },
        changeShowPage() {
            var start = (this.currentPage - 1) * this.pageSize;
            var end = (this.currentPage - 1) * this.pageSize + this.pageSize;
            var str = "start=" + start + " end=" + end;
            console.log(str);
            this.showData = this.searchData.slice(start, end);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.changeShowPage()
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.changeShowPage()
        },
        
        setOrderDate(){
            const now = new Date();
            const year = now.getFullYear();
            const month = ('0' + (now.getMonth() + 1)).slice(-2); // 月份从0开始，所以需要加1
            const day = ('0' + now.getDate()).slice(-2);    //slice(-2)表示截取字符串最后两位，实现的功能就是%02d格式，只有一位数字补0，两位数字正常输出
            const hours = ('0' + now.getHours()).slice(-2);
            const minutes = ('0' + now.getMinutes()).slice(-2);
            const seconds = ('0' + now.getSeconds()).slice(-2);
            const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            console.log(formattedTime); // 输出格式为 YYYY-MM-DD HH:MM:SS
            for (let i = 0; i< this.totalData.length; i++){
                this.totalData[i].OrderDate = formattedTime;
            }
        },
        onSubmitOrders() {
            //this.postByFormData()
            this.setOrderDate() //totalData写入订单时间
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                url: "/api/order",
                //params:{} //params是作为URL里的查询参数传递
                data: {
                    operation: 'insert',
                    orders: this.totalData,  
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                },
            })
                .then((repos) => {
                    //alert("收到回复")
                    console.log(repos.data);
                    if (repos.data.Success == "true"){
                        this.$notify({
                            title: '成功',
                            message: `已提交商品订单`,
                            type: 'success',
                        });
                        this.totalData = [];
                        this.searchData = [];
                        this.$store.commit('updateCart', new Map()) //清空购物车
                        this.changeShowPage()
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
        postByJson() {
            this.axios({
                method: "post",
                url: "/api/order",  // 后端的 API 地址
                data: {
                    operation: 'insert',
                    orders: this.totalData,  // 对象数组
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

        },
        postByFormData() {
            let formData = new FormData();
            formData.append('operation', 'insert');
            let data = [
                { id: 10001, name: 'hello', quantity: 209 },
                { id: 10101, name: 'hello', quantity: 1314 },
                { id: 10033, name: 'hello', quantity: 234267 },
                { id: 14004, name: 'hello', quantity: 8423 },
                { id: 10555, name: 'hello', quantity: 18811 },
            ]
            data.forEach((item, index) => {
                formData.append(`orders[${index}][id]`, item.id);
                formData.append(`orders[${index}][name]`, item.name);
                formData.append(`orders[${index}][quantity]`, item.quantity);
            });
            //二进制文件
            let fileInput = document.querySelector('input[type="file"]');
            if (fileInput.files.length > 0) {
                formData.append('avatar', fileInput.files[0]);  // 假设是图片
            }
            this.axios({
                method: "post",
                url: "/api/order",  // 后端的 API 地址
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },

        onModifyOrder(row) {
            //alert(`${row.Username},${row.ProductID},${row.SubCatecory},${row.Address},${row.BuyNum},`);
            console.log(row)
            this.dialogVisible = true;
        },
        handleClose() {

        },

    },
};
</script>

<style scoped>
.el-container {
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}


</style>