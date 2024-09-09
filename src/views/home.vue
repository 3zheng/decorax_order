<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="left-elements">
                    <h1 style="text-align: left;margin-bottom: 10px;">下单平台</h1>
                </div>
                <div class="right-elements" style="margin-right: 20px;">
                    <el-tooltip effect="dark" content="我的购物车" placement="bottom">
                        <router-link to="/carts">
                            <i class="el-icon-shopping-cart-2" style="color: #F2F8FE; font-size: 24px;"></i>
                        </router-link>
                    </el-tooltip>
                </div>
            </el-header>
            <el-container>
                <el-aside width="230px">
                    <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64"
                        text-color="#fff" active-text-color="#ffd04b" style="text-align: left;">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>五金FERRETERIA</span>
                            </template>
                            <el-menu-item index="1-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventorySummary' }" class="custom-link" active-class="active-link">
                                        	四寸合页BISAGRA 4''&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="1-1">
                                <i class="el-icon-menu"></i>
                                <router-link :to="{ name: 'Inventory' }" class="custom-link"
                                    active-class="active-link">卡扣SUJETADOR</router-link>
                                <!--span slot="title">
                                    <router-link :to="{ name: 'Inventory', params: { pr1: 114514, pr2: 'zhendema' } }">按ID仓库排序</router-link>
                                </span-->
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventorySCZ' }" class="custom-link" active-class="active-link">
                                        螺丝钉TORNILLO&nbsp;&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="1-4">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        硅胶SILICONA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>龙骨PERFIL</span>
                            </template>
                            <el-menu-item index="2-1">
                                <i class="el-icon-menu"></i>
                                <router-link :to="{ name: 'Inventory' }" class="custom-link"
                                    active-class="active-link">欧米伽型OMEGA</router-link>
                                <!--span slot="title">
                                    <router-link :to="{ name: 'Inventory', params: { pr1: 114514, pr2: 'zhendema' } }">按ID仓库排序</router-link>
                                </span-->
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventorySummary' }" class="custom-link" active-class="active-link">
                                        直角型ANGULO&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventorySCZ' }" class="custom-link" active-class="active-link">
                                        立柱型MONTANTE&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-4" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        横向剖面型1.2<br>PERFILERIA ACUSTICA<br>TRANSVERSAL1.2
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-5" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        横向剖面型0.6<br>PERFILERIA ACUSTICA<br>TRANSVERSAL0.6
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        围栏剖面型<br>PERFILERIA ACUSTICA<br>PERIMETRAL
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        中间剖面型<br>CENTRAL ACOUSTIC<br>PROFILERY
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-7">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        分层型SOLERA&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-9">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventoryLPZ' }" class="custom-link" active-class="active-link">
                                        Z型Buña Z&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>屋檐板CORNISA</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="4-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'SalesRecord' }" class="custom-link"
                                        active-class="active-link">销售员日销售数据</router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="4-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'SalesSummary' }" class="custom-link"
                                        active-class="active-link">销售员月销售数据</router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="4-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'InventorySales' }" class="custom-link"
                                        active-class="active-link">产品近30天销量</router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="9">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>重要客户</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="9-1">重要客户</el-menu-item>
                            <el-menu-item index="9-2">新增的重要客户</el-menu-item>
                            <el-menu-item index="9-3">丢失的重要客户</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="99" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">占位</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                    <el-footer style="line-height: 30px; height: 30px">Created by Vue</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script>
// @ is an alias to /src
export default {
    name: "home",
};
</script>

<style>
.el-breadcrumb {
    padding: 15px;
}

.el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 30px;
    padding: 20px;
    display: flex;
    justify-content: space-between; /* 左右分布 */
    align-items: center; /* 垂直居中 */
}

.left-elements,
.right-elements {
  display: flex;
}

.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 10px;
}

.el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    /*
    text-align: center;
    line-height: 160px;
    */
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

/*文字过长时自动换行，或者允许换行符<br>生效*/
.el-submenu__title {
  display: flex;
  align-items: center;
}
.el-submenu__title span{
  white-space: normal;
  word-break: break-all;
  line-height: 20px;
  flex: 1;
  padding-right: 20px;
}
 
.el-menu-item {
  display: flex;
  align-items: center;
  padding-right: 20px!important;
}
.el-menu-item span {
  white-space: normal;
  word-break: break-all;
  line-height: 20px;
  flex: 1;
}
.custom-link {
    color: white; /* 修改链接颜色 */
    text-decoration: none; /* 去掉下划线 */
    line-height: 1; /* 根据需要调整行高 */
}

/*增加间距*/
/* 使用深度选择器覆盖 Element UI 默认样式 */
.custom-spacing {
    margin-top: 10px;
    margin-bottom: 15px; /* 调整为你需要的间距 */
    font-size:11px!important;
}

.active-link {
    color: rgb(25, 244, 36); /* 修改链接颜色 */
    text-decoration: none; /* 去掉下划线 */
}

</style>