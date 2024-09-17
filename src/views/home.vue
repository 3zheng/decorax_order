<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="left-elements">
                    <h1 style="text-align: left;margin-bottom: 10px;">下单平台</h1>
                </div>
                <div class="right-elements" style="margin-right: 20px;">
                    <el-button type="success" icon="el-icon-s-order" @click="onMyOrders">{{$store.getters.getUserName}}的订单</el-button>
                    <el-button type="warning" icon="el-icon-shopping-cart-2" @click="onCart">去购物车结算</el-button>
                    <!--el-tooltip effect="dark" content="我的购物车" placement="bottom">
                        <router-link to="/carts">
                            <i class="el-icon-shopping-cart-2" style="color: #F2F8FE; font-size: 24px;"></i>
                        </router-link>
                    </el-tooltip-->
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
                                    <router-link :to="{ name: 'Bisagra4' }" class="custom-link" active-class="active-link">
                                        四寸合页BISAGRA 4''&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="1-1">
                                <i class="el-icon-menu"></i>
                                <router-link :to="{ name: 'Sujetador' }" class="custom-link"
                                    active-class="active-link">卡扣SUJETADOR</router-link>
                                <!--span slot="title">
                                    <router-link :to="{ name: 'Inventory', params: { pr1: 114514, pr2: 'zhendema' } }">按ID仓库排序</router-link>
                                </span-->
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Tornillo' }" class="custom-link" active-class="active-link">
                                        螺丝钉TORNILLO&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="1-4">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Silicona' }" class="custom-link" active-class="active-link">
                                        硅胶SILICONA&nbsp;&nbsp;&nbsp;&nbsp;
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
                                <router-link :to="{ name: 'Omega' }" class="custom-link"
                                    active-class="active-link">欧米伽型OMEGA</router-link>
                                <!--span slot="title">
                                    <router-link :to="{ name: 'Inventory', params: { pr1: 114514, pr2: 'zhendema' } }">按ID仓库排序</router-link>
                                </span-->
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Angulo' }" class="custom-link" active-class="active-link">
                                        直角型ANGULO&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Montante' }" class="custom-link" active-class="active-link">
                                        立柱型MONTANTE&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-4" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PA_Transversal12' }" class="custom-link" active-class="active-link">
                                        横向剖面型1.2<br>PERFILERIA ACUSTICA<br>TRANSVERSAL1.2
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-5" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PA_Transversal06' }" class="custom-link" active-class="active-link">
                                        横向剖面型0.6<br>PERFILERIA ACUSTICA<br>TRANSVERSAL0.6
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PA_Perimetral' }" class="custom-link" active-class="active-link">
                                        围栏剖面型<br>PERFILERIA ACUSTICA<br>PERIMETRAL
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CA_Profilery' }" class="custom-link" active-class="active-link">
                                        中间剖面型<br>CENTRAL ACOUSTIC<br>PROFILERY
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-7">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Solera' }" class="custom-link" active-class="active-link">
                                        分层型SOLERA&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="2-9">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Z_Buna' }" class="custom-link" active-class="active-link">
                                        Z型Buña Z&nbsp;&nbsp;&nbsp;
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>地板PISO</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="3-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PF_SPC' }" class="custom-link" active-class="active-link">
                                        悬浮复合地板PISO<br>FLOTANTE SPC
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'P_Adhesivo' }" class="custom-link" active-class="active-link">
                                        地板贴<br>PISO ADHESIVO
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'A_Autoadhesiva' }" class="custom-link" active-class="active-link">
                                        地毯贴ALFOMBRA<br>AUTOADHESIVA
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>可拆卸扣板<br>CIELO MODULAR</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="5-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Gypsum595' }" class="custom-link" active-class="active-link">
                                        石膏板GYPSUM 595
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="5-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PD_PVC' }" class="custom-link" active-class="active-link">
                                        PVC板<br>PLACA DE PVC
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>扣板CIELO<br>FALSO PVC</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="6-1" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CFP_Ancho20cm' }" class="custom-link" active-class="active-link">
                                        20cm扣板<br>CIELO FALSO<br>PVC ANCHO 20CM
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="6-2" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CFP_Ancho25cm' }" class="custom-link" active-class="active-link">
                                        25cm扣板<br>CIELO FALSO<br>PVC ANCHO 25CM
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="6-3" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CFP_Ancho30cm' }" class="custom-link" active-class="active-link">
                                        30cm扣板<br>CIELO FALSO<br>PVC ANCHO 30CM
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>屋檐板CORNISA</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="7-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CPM_T' }" class="custom-link" active-class="active-link">
                                        CORNISA PVC<br>MODELO T
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="7-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CPM_U' }" class="custom-link" active-class="active-link">
                                        CORNISA PVC<br>MODELO U
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="7-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CPM_F' }" class="custom-link" active-class="active-link">
                                        CORNISA PVC<br>MODELO F
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="7-4">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CPM_UA' }" class="custom-link" active-class="active-link">
                                        CORNISA PVC<br>MODELO UA
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="7-5">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CPM_H' }" class="custom-link" active-class="active-link">
                                        CORNISA PVC<br>MODELO H
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="8">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>干建筑材料DRYWALL</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="8-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'CD_Drywall' }" class="custom-link" active-class="active-link">
                                        石膏板胶带<br>CINTA DE DRYWALL
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="8-2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PE_Yeso' }" class="custom-link" active-class="active-link">
                                        石膏板<br>PLACA DE YESO
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="8-3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Masilla' }" class="custom-link" active-class="active-link">
                                        泥灰MASILLA
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="9">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>3D</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="9-1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'A_Adhesiva' }" class="custom-link" active-class="active-link">
                                        墙纸<br>AUTO ADHESIVA
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-2" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'LMA_Adhesiva' }" class="custom-link" active-class="active-link">
                                        大理石墙板<br>LAMINA MARMOLADA<br>AUTO ADHESIVA
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-3" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'MA_Adhesiva' }" class="custom-link" active-class="active-link">
                                        大理石墙贴<br>MARMOLADA<br>AUTO ADHESIVA
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-4" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'AE_Rollo' }" class="custom-link" active-class="active-link">
                                        卷状贴纸<br>ADHESIVO EN ROLLO
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-5" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'Lamina_3D' }" class="custom-link" active-class="active-link">
                                        3D墙板<br>LAMINA 3D
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'P_Adhesiva' }" class="custom-link" active-class="active-link">
                                        墙纸<br>PAPEL ADHESIVO
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-7" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'VAP_Vidrio' }" class="custom-link" active-class="active-link">
                                        玻璃贴<br>VINILO ADHESIVO<br>PARA VIDRIO
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-7" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'ZA_ Adhesiva' }" class="custom-link" active-class="active-link">
                                        踢脚线ZOCALO<br>AUTO ADHESIVA
                                    </router-link>
                                </span>
                            </el-menu-item>
                        </el-submenu>
                        <el-submenu index="10">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>墙板<br>REVESTIMIENTO</span>
                            </template>
                            <template slot="title"></template>
                            <el-menu-item index="9-1" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PDP_Marmolados_2440_1220_3mm' }" class="custom-link" active-class="active-link">
                                        2.44m墙板 Placas <br>de Pvc marmolados,<br>2.44m*1.22m*3mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-2" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'RI_PVC_400_9_2950mm' }" class="custom-link" active-class="active-link">
                                        40cm*9mm内墙板 <br>Revestimiento Int. PVC<br>40cm*9mm*2.95m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-3" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'RI_PVC_600_8_2950mm' }" class="custom-link" active-class="active-link">
                                        60cm*8mm内墙板 <br>Revestimiento Int. PVC<br>60cm*8mm*2.95m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-4" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'LT_Espejo_2440_1220_5mm' }" class="custom-link" active-class="active-link">
                                        2.44m镜面板 <br>Lamina tipo espejo<br> 2.44m*1.22m*5mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-5" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PD_Aluminio_1220_2800_7mm' }" class="custom-link" active-class="active-link">
                                        2.8M蜂窝铝板<br>Panel De Aluminio<br>1.22M*2.8M*7MM
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-6" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'PD_Aluminio_1220_2900_7mm' }" class="custom-link" active-class="active-link">
                                        2.9M蜂窝铝板<br>Panel De Aluminio<br>1.22M*2.9M*7MM
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-7" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'P_Solido_1220_2440_3mm' }" class="custom-link" active-class="active-link">
                                        聚碳酸酯板<br>Policarbonado solido<br> 1220mm*2440mm*3mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-8" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'RocaPU_1200_600_30mm' }" class="custom-link" active-class="active-link">
                                        岩棉板 Roca PU<br> 1.2m*0.6m*3cm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-9" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'R_Ext_3850_350_16mm' }" class="custom-link" active-class="active-link">
                                        35cm外墙板<br>Revestimiento Ext.<br>3,85m*35cm*16mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-10" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'R_Ext_3850_380_16mm' }" class="custom-link" active-class="active-link">
                                        38cm外墙板<br>Revestimiento Ext.<br>3,85m*38cm*16mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-11" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'R_Ext_3850_390_16mm' }" class="custom-link" active-class="active-link">
                                        39cm外墙板<br>Revestimiento Ext.<br>3,85m*39cm*16mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-12" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'TDD_WPC' }" class="custom-link" active-class="active-link">
                                        WPC隔断<br>Tubos Divisorios <br>de WPC
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-13" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_150_15_2900mm' }" class="custom-link" active-class="active-link">
                                        15cm*15mm条纹板Wall<br> Panel de PVC Ripado<br> 15cm*15mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-14" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_160_16_2900mm' }" class="custom-link" active-class="active-link">
                                        16cm*16mm条纹板Wall<br> Panel de PVC Ripado<br> 16cm*16mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-15" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_160_24_2900mm' }" class="custom-link" active-class="active-link">
                                        16cm*24mm条纹板Wall<br> Panel de PVC Ripado<br> 16cm*24mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-16" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_200_16_2900mm' }" class="custom-link" active-class="active-link">
                                        20cm*16mm条纹板Wall<br> Panel de PVC Ripado<br> 20cm*16mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-17" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_200_21_2900mm' }" class="custom-link" active-class="active-link">
                                        20cm*21mm条纹板Wall<br> Panel de PVC Ripado<br> 20cm*21mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-18" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'WPDP_Ripado_200_24_2900mm' }" class="custom-link" active-class="active-link">
                                        20cm*24mm条纹板Wall<br> Panel de PVC Ripado<br> 20cm*24mm*2.9m
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-19" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'TDED_PVC_1220_2900_5mm' }" class="custom-link" active-class="active-link">
                                        5mm泡沫板<br>Tablero De Espuma De PVC 1.22m*2.9m*5mm
                                    </router-link>
                                </span>
                            </el-menu-item>
                            <el-menu-item index="9-20" class="custom-spacing">
                                <i class="el-icon-menu"></i>
                                <span slot="title">
                                    <router-link :to="{ name: 'TDED_PVC_1220_2900_8mm' }" class="custom-link" active-class="active-link">
                                        8mm泡沫板<br>Tablero De Espuma De PVC 1.22m*2.9m*8mm
                                    </router-link>
                                </span>
                            </el-menu-item>
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
    methods:{
        onMyOrders(){
            alert('onMyOrders')
            this.$router.push({ name: 'orders' })
        },

        onCart(){
            alert('onCart')
            this.$router.push({ name: 'cart' })
        },
    },
};
</script>

<style>

</style>