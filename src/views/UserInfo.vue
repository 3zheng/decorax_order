<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <router-link to="/" class="home-link">返回首页</router-link>
        </div>
        <div>
          <!--el-button type="warning" icon="el-icon-shopping-cart-2" @click="onCart">去购物车结算</el-button-->
        </div>
      </el-header>
      <el-main>
        <!--开关el-switch v-model="isShow" active-text="只读" inactive-text="可写"></el-switch-->
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="user-info">
          <el-form-item prop="username" label="备注名" :rules="[{ required: true, message: '备注名不能为空', trigger: 'blur' }]">
            <el-col :span="18">
              <el-input v-model="dynamicValidateForm.username" :disabled="isBanName"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="el-icon-edit" @click.prevent="editUsername">编辑</el-button>
            </el-col>
          </el-form-item>
          <el-form-item prop="defaultAddress" label="默认地址"
            :rules="[{ required: true, message: '默认地址不能为空', trigger: 'blur' }]">
            <el-col :span="18">
              <el-input v-model="dynamicValidateForm.defaultAddress" :disabled="isBanAddress"></el-input>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" icon="el-icon-edit" @click.prevent="editDefaultAddress">编辑</el-button>
            </el-col>
          </el-form-item>
          <el-form-item v-for="(address, index) in dynamicValidateForm.otherAddresses" :label="'地址' + (index + 1)"
            :key="address.key" :prop="'otherAddresses.' + index + '.value'"
            :rules="{ required: true, message: '不能为空', trigger: 'blur' }">
            <el-row>
              <el-col :span="15">
                <el-input type="textarea" v-model="address.value" :autosize="{ minRows: 2, maxRows: 6 }"></el-input>
              </el-col>
              <el-col :span="9">
                <el-button type="primary" @click.prevent="setAsDefault(address)">设为默认地址</el-button>
                <el-button type="danger" @click.prevent="removeAddress(address)">删除</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload"
              @click="submitForm('dynamicValidateForm')">保存并提交修改</el-button>
            <el-button @click="addAddress">新增地址</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        otherAddresses: [{
          value: ''
        }],
        username: '',
        defaultAddress: '',
      },
      isShow: true,
      isBanName: true, //true是禁止写入
      isBanAddress: true,
      //addresses: [],  //this.$store.state.address的值
    };
  },
  created() {
    this.dynamicValidateForm.username = this.$store.getters.getUserName;
    const addresses = this.$store.getters.getAddress;
    if (addresses.length >= 1) {
      this.dynamicValidateForm.defaultAddress = addresses[0];
    }
    if (addresses.length >= 2) {
      this.dynamicValidateForm.otherAddresses = []
      //从addresses[1]开始赋值，因为addresses[0]是默认地址defaultAddress
      for (let i = 1; i < addresses.length; i++) {
        this.dynamicValidateForm.otherAddresses.push({
          value: addresses[i],
          key: Date.now(),
        });
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert("commit")
          let addresses = [];
          addresses.push(this.dynamicValidateForm.defaultAddress)
          this.dynamicValidateForm.otherAddresses.forEach(item =>{
            addresses.push(item.value)
          });
          this.$store.commit('updateAddress', addresses); //更新vuex store里的全局变量
          this.$store.commit('updateUserName', this.dynamicValidateForm.username)
          let formData = new FormData();
          formData.append('userid', this.$store.getters.getUserID);
          addresses.forEach((item) => {
            formData.append(`address[]`, item)
          });
          formData.append('username', this.dynamicValidateForm.username)
          this.axios({
            method: "post",
            url: "/api/userinfo",  // 后端的 API 地址
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then(repos => {
              if (repos.data.Success == "true") {
                this.$notify({
                  title: '成功',
                  message: `已保存用户资料`,
                  type: 'success',
                });
                this.totalData = [];
              } else {
                this.$notify({
                  title: '失败',
                  message: `服务器忙，请稍后再试`,
                  type: 'error',
                });
              }
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    editUsername() {
      this.isBanName = !this.isBanName;
    },
    editDefaultAddress() {
      this.isBanAddress = !this.isBanAddress;
    },
    removeAddress(item) {
      var index = this.dynamicValidateForm.otherAddresses.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.otherAddresses.splice(index, 1);
      }
    },
    setAsDefault(item) {
      this.dynamicValidateForm.defaultAddress = item.value;
      this.addresses[0] = item.value;
      this.$store.commit('updateAddress', this.addresses); //更新vuex store里的全局变量
    },
    addAddress() {
      this.dynamicValidateForm.otherAddresses.push({
        value: '',
        key: Date.now(),
      });
    }
  }
}
</script>

<style scoped>
.user-info {
  width: 1000px;
  margin: 100px auto;
  border: 1px solid #DCDFE6;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 30px #EBEEF5;
}

.user-button-container {
  display: flex;
  flex-direction: column;
  /* 按钮垂直排列 */
  justify-content: space-between;
  /* 调整按钮间距 */
  align-items: center;
  /* 水平居中 */
}
</style>