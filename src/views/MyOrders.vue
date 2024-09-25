<template>
    <div>
        <el-container>
            <el-header>
                <div>
                    <router-link to="/" class="home-link">返回首页</router-link>
                </div>
                <div>
                    <el-button type="warning" icon="el-icon-shopping-cart-2" @click="onCart">去购物车结算</el-button>
                    <el-button type="primary" icon="el-icon-edit" @click="onUserInfo">修改个人资料</el-button>
                </div>
            </el-header>
            <el-main>
                <el-table :data="showData" border style="width: 100%" size="mini" :row-style="rowStyle">
                    <el-table-column label="Número De Serie" width="70">
                        <template slot="header">序号</template>
                        <template slot-scope="scope">{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</template>
                    </el-table-column>
                    <el-table-column prop="UserName" label="用户名" width="120"></el-table-column>
                    <el-table-column prop="OrderID" label="订单号" width="80"></el-table-column>
                    <el-table-column prop="ProductID" label="产品ID" width="120"> </el-table-column>
                    <el-table-column prop="SubCategory" label="子类" width="150"></el-table-column>
                    <el-table-column prop="Address" label="收货地址" width="180"></el-table-column>
                    <el-table-column prop="ProductNum" width="80">
                        <template slot="header">订购数量</template>
                    </el-table-column>
                    <el-table-column prop="OrderDate" label="订单日期" width="135"></el-table-column>
                    <el-table-column prop="Status" label="状态" width="100" :formatter="formatStatus"></el-table-column>
                    <el-table-column label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button v-if="scope.row.Status === 2" size="medium" type="success"
                                icon="el-icon-circle-check" @click="onConfirmReceipt(scope.$index)">确认收货</el-button>
                            <el-button v-if="scope.row.Status === 0" size="medium" type="danger" icon="el-icon-delete"
                                @click="onDeletRow(scope.$index)">取消订单</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-form :inline="true">
                    <el-row style="margin-top: 10px">
                        <el-col :span="8" style="text-align: left; margin-top: 0px">
                            <el-button type="primary" icon="el-icon-back" @click="onPageUp">Página Arriba</el-button>
                            <el-button type="primary" icon="el-icon-right" @click="onPageDown">Página Abajo</el-button>
                        </el-col>
                        <el-col :span="10" style="text-align: right; margin-top: 0px">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage" :page-sizes="[5, 10, 20, 50]" :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper" :total="searchLength">
                            </el-pagination>
                        </el-col>
                        <el-col :span="2"> </el-col>
                    </el-row>
                </el-form>
                <div style="margin-top: 10px;">
                    <el-progress v-if="showProgress" :text-inside="true" :color="customColors" :stroke-width="20"
                        :percentage="progress"></el-progress>
                </div>
            </el-main>
            <!--el-footer style="line-height: 30px; height: 30px">Footer</el-footer-->
        </el-container>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
    name: "myOrders",

    data() {
        return {
            form: {  //表单
                fuzzyQuery: '',  //模糊查询条件
            },
            progress: 0,    //进度条进度 0-100
            showProgress: true, //是否显示进度条
            customColors: [
                { color: '#e6a23c', percentage: 80 },  //橙色
                { color: '#67c23a', percentage: 100 },    //绿色
            ],
            totalData: [],      //所有数据
            searchData: [],  //根据条件筛选后数据集
            searchLength: 0,   //数据个数
            showData: [],    //当前显示的数据
            pageSize: 5, //每页展示的数据个数
            currentPage: 1,  //当前页
        };
    },

    beforeRouteEnter: (to, from, next) => {
        //alert("进入Debt路由");
        next((vm) => {
            vm.startProgress();
            vm.getData();
        });
    },
    /*
    mounted: ()=>{
        alert('mounted')
        this.getData()
    },
    */
    methods: {
        onConfirmReceipt(scopeIndex) {
            const orderID = this.showData[scopeIndex].OrderID;
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                //url: "http://35.203.42.244:31111/api/debt_daily", //通过ngnix反向代理
                //url: "http://104.225.234.236:31111/api/debt_daily", //通过ngnix反向代理
                url: "/api/order",
                //params:{} //params是作为URL里的查询参数传递
                data: {
                    operation: 'update',
                    orders: [
                        {OrderID:orderID, UserID:this.$store.getters.getUserID, Status:9,}
                    ],  //只有一个元素的数组
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                },
            })
                .then((repos) => {
                    //console.log(repos.data);
                    if (repos.data.Success == "true") {
                        alert("ConfirmReceipt成功")
                        let index = this.totalData.findIndex(item => item.OrderID === orderID)
                        if (index != -1){
                            this.totalData[index].Status = 9;
                        }
                        index = this.searchData.findIndex(item => item.OrderID === orderID)
                        if (index != -1){
                            this.searchData[index].Status = 9;
                        }
                        this.searchLength = this.searchData.length;
                        this.changeShowPage();
                    } else {
                        this.$notify({
                            title: '失败',
                            message: `提交ConfirmReceipt错误，请重新登陆后再试`,
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onDeletRow(scopeIndex) {
            const orderID = this.showData[scopeIndex].OrderID;
            this.axios({
                method: "post",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                //url: "http://35.203.42.244:31111/api/debt_daily", //通过ngnix反向代理
                //url: "http://104.225.234.236:31111/api/debt_daily", //通过ngnix反向代理
                url: "/api/order",
                //params:{} //params是作为URL里的查询参数传递
                data: {
                    operation: 'delete',
                    orders: [{OrderID:orderID, UserID:this.$store.getters.getUserID}],  //只有一个元素的数组
                },
                headers: {
                    'Content-Type': 'application/json'  // 明确指定 JSON 格式
                },
            })
                .then((repos) => {
                    //console.log(repos.data);
                    if (repos.data.Success == "true") {
                        alert("delete order成功")
                        let index = this.totalData.findIndex(item => item.OrderID === orderID)
                        if (index != -1){
                            this.totalData.splice(index, 1)
                        }
                        index = this.searchData.findIndex(item => item.OrderID === orderID)
                        if (index != -1){
                            this.searchData.splice(index, 1)
                        }
                        this.searchLength = this.searchData.length;
                        this.changeShowPage();
                    } else {
                        this.$notify({
                            title: '失败',
                            message: `提交delete order错误，请重新登陆后再试`,
                            type: 'error',
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tableRowClassName({ row, rowIndex }) {  //弃用
            if (row.Status === 9) {
                alert(`row Status = 9, index = ${rowIndex}`)
                return 'highlight-row';
            }
            return '';
        },
        rowStyle({ row }) {
            switch (row.Status) {
                case 9:
                    return { backgroundColor: '#a8a6a8' }; // 浅灰色
                default:
                    return {};
            }
        },
        formatStatus(row, column, cellValue) {
            switch (cellValue) {
                case 0:
                    return '未发货';
                case 1:
                    return '🔒已接单';
                case 2:
                    return '发货中';
                case 9:
                    return '已收货';
                default:
                    return '未知状态';
            }
        },
        onCart() {
            alert('onCart');
            this.$router.push({ name: 'cart' });
        },
        onUserInfo() {
            alert('userinfo');
            this.$router.push({ name: 'userinfo' });
        },
        startProgress() {
            const interval = setInterval(() => {
                if (this.progress < 100) {
                    this.progress += 10;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        this.showProgress = false;
                    }, 1000); // 1秒后隐藏进度条
                }
            }, 1000); // 每秒增加10%
        },
        getData() {
            this.axios({
                method: "get",
                //url: "http://localhost:24686/api/debt_daily",   //后端服务器的实际端口
                //url: "http://35.203.42.244:31111/api/debt_daily", //通过ngnix反向代理
                //url: "http://104.225.234.236:31111/api/debt_daily", //通过ngnix反向代理
                url: "/api/order",
                params: {    //params是作为URL里的查询参数传递
                    userid: this.$store.getters.getUserID,
                },
            })
                .then((repos) => {
                    alert("收到回复")
                    //console.log(repos.data);
                    if (repos.data.Success == "true") {
                        alert("成功")
                        this.totalData = this.$removeExtraSpaces(repos.data.AnyBody);   //去两个以上的重复空格
                        this.searchData = this.totalData;
                        this.searchLength = this.searchData.length;
                        this.changeShowPage();
                    } else {
                        this.$notify({
                            title: '失败',
                            message: `获取不到订单记录`,
                            type: 'error',
                        });
                    }

                    this.progress = 100;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.changeShowPage();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.changeShowPage();
        },
        changeShowPage() {
            var start = (this.currentPage - 1) * this.pageSize;
            var end = (this.currentPage - 1) * this.pageSize + this.pageSize;
            var str = "start=" + start + " end=" + end;
            console.log(str);
            this.showData = this.searchData.slice(start, end);
        },
        onPageUp() {
            if (this.currentPage > 1) {
                this.handleCurrentChange(this.currentPage - 1);
            }
        },
        onPageDown() {
            if (this.currentPage * this.pageSize < this.searchLength) {
                this.handleCurrentChange(this.currentPage + 1);
            }
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

.el-table .highlight-row {
    background-color: #a8a6a8;
}
</style>