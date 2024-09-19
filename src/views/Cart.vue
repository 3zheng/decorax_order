<template>
    <div>
        <el-container>
            <el-header>
                <div>
                    <router-link to="/" class="home-link">返回首页</router-link>
                </div>
                <div>
                    <el-button type="primary" icon="el-icon-edit">修改默认收货地址</el-button>
                </div>
            </el-header>
            <el-main>
                <el-table :data="showData" border style="width: 100%" size="mini">
                    <el-table-column label="Número De Serie" width="70">
                        <template slot="header">序号</template>
                        <template slot-scope="scope">{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column prop="Username" label="用户名" width="160"></el-table-column>
                    <el-table-column prop="ProductID" label="产品ID" width="150"> </el-table-column>
                    <el-table-column prop="SubCatecory" label="子类" width="300"></el-table-column>
                    <el-table-column prop="Address" label="收货地址" width="250"></el-table-column>
                    <el-table-column prop="BuyNum" width="110">
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
                        <el-col :span="8" style="text-align: left; margin-top: 0px">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage" :page-sizes="[5, 10, 20, 50]" :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper" :total="searchTotal">
                            </el-pagination>
                        </el-col>
                        <el-col :span="10" style="text-align: right; margin-top: 0px">
                            <el-button type="primary" icon="el-icon-s-claim" @click="onSubmitOrders">提交订单</el-button>
                        </el-col>
                        <el-col :span="2"> </el-col>
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
        getAllData() {
            let cart = this.$store.getters.getCart;
            let username = this.$store.getters.getUserName;
            let dict = this.$store.getters.getProductDict;
            let address = this.$store.getters.getAddress;
            for (let [key, value] of cart) {
                if (!dict.has(key)) {
                    //产品字典里不存在
                    alert(`产品${key}在字典表里找不到`);
                }
                let subCateory = dict.get(key);
                const obj = {
                    'Username': username,
                    'ProductID': key,
                    'SubCatecory': subCateory,
                    'Address': address,
                    'BuyNum': value,
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
        changeShowPage() {
            var start = (this.currentPage - 1) * this.pageSize;
            var end = (this.currentPage - 1) * this.pageSize + this.pageSize;
            var str = "start=" + start + " end=" + end;
            console.log(str);
            this.showData = this.searchData.slice(start, end);
        },
        onSubmitOrders() {
            //this.postByFormData()
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                url: "/api/order",
                //params:{} //params是作为URL里的查询参数传递
                data: {
                    operation: 'insert',
                    orders: this.totalData,  // 对象数组
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                }
            })
                .then((repos) => {
                    //console.log(repos.data);
                    this.totalData = this.$removeExtraSpaces(repos.data);   //去两个以上的重复空格
                    this.searchData = this.$removeExtraSpaces(repos.data);
                    this.searchTotal = this.searchData.length;
                    this.changeShowPage()
                    this.progress = 100;
                })
                .catch((error) => {
                    console.log(error);
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
            alert(`${row.Username},${row.ProductID},${row.SubCatecory},${row.Address},${row.BuyNum},`);
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

.home-link {
    color: blue;
    /* 修改链接颜色 */
    line-height: 1;
    /* 根据需要调整行高 */
}

.home-link:hover {
    color: blueviolet;
    /* 修改链接颜色 */
    line-height: 1;
    /* 根据需要调整行高 */
}
</style>