<template>
  <div id="loginbox">
    <!-- 表单组件 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          <h3>登陆</h3>
        </span>
      </div>
      <div class="text item">
        <!-- 框组件 -->
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm2: {
        pass: '',
        username:''

      },
      rules2: {
        pass: [
          { required: true, trigger: 'blur', message: "密码必须填写" },
          { min: 6, max: 12, message: "长度在6到12字符", trigger: "blur" }
        ],
     
      username: [
          { required: true, trigger: 'blur', message: "用户名必须填写" },
          { min: 6, max: 10, mssage: "长度在6到10字符", trigger: "blur" }
        ] 
        },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.$router.push("/");
        } else {
          alert("登陆失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#loginbox {
  width: 520px;
  height: 300px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#loginbox input {
  margin-right: 20px;
}
</style>

