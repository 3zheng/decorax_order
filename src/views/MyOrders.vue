<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
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
                    <el-table-column prop="ResidualNum" width="110">
                        <template slot="header">订购数量</template>
                    </el-table-column>
                    <el-table-column label="操作" width="150">
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle></el-button>
                    </el-table-column>
                </el-table>
            </el-main>
            <el-footer style="line-height: 30px; height: 30px">Footer</el-footer>
        </el-container>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
    name: "myOrders",
    
};
</script>

<style scoped> 
.el-container{
    margin: 0px;
    padding: 0px;
    height: 100%; 
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>