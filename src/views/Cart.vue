<template>
    <div>
        <el-container>
            <el-header>
                <div>
                    <router-link :to="{ name: 'Bisagra4' }" class="home-link">返回首页</router-link>
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
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <el-form :inline="true">
                    <el-row style="margin-top: 10px">
                        <el-col :span="8" style="text-align: left; margin-top: 0px">
                            <el-button type="primary" icon="el-icon-back" @click="onPageUp">Página Arriba</el-button>
                            <el-button type="primary" icon="el-icon-right" @click="onPageDown">Página Abajo</el-button>
                        </el-col>
                        <el-col :span="10" style="text-align: right; margin-top: 0px">
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                :current-page="currentPage" :page-sizes="[5, 10, 20, 50]" :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper" :total="searchTotal">
                            </el-pagination>
                        </el-col>
                        <el-col :span="2"> </el-col>
                    </el-row>
                </el-form>
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
        changeShowPage(){
            var start = (this.currentPage-1)*this.pageSize;
            var end = (this.currentPage-1)*this.pageSize + this.pageSize;
            var str = "start="+ start+ " end="+ end;
            console.log(str);
            this.showData = this.searchData.slice(start, end);
        },
        onPageUp(){
            if (this.currentPage > 1){
                this.handleCurrentChange(this.currentPage-1);
            }           
        },
        onPageDown(){
            if (this.currentPage * this.pageSize < this.searchTotal){
                this.handleCurrentChange(this.currentPage+1)
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