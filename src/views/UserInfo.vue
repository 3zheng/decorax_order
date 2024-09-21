<template>
    <div>
        <el-switch v-model="isShow" active-text="只读" inactive-text="可写"></el-switch>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="user-info">
            <el-form-item prop="username" label="备注名" >
                <el-input v-model="dynamicValidateForm.email" :readonly="isShow"></el-input>
            </el-form-item>
            <el-form-item prop="address" label="默认地址" :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            ]">
                <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'地址' + (index+1)" :key="domain.key"
                :prop="'domains.' + index + '.value'">
                <el-row>
                    <el-col :span="15">
                        <el-input type="textarea" v-model="domain.value" :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
                    </el-col>
                    <el-col :span="9" >
                        <el-button @click.prevent="removeDomain(domain)">设为默认地址</el-button>
                        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                <el-button @click="addDomain">新增地址</el-button>
                <!--el-button @click="resetForm('dynamicValidateForm')">重置</el-button-->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                username: ''
            },
            isShow: true,

        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
            });
        }
    }
}
</script>

<style scoped>
.user-info {
    width: 800px;
    margin: 100px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #EBEEF5;
}

.user-button-container {
    display: flex;
    flex-direction: column; /* 按钮垂直排列 */
    justify-content: space-between; /* 调整按钮间距 */
    align-items: center; /* 水平居中 */
}
</style>