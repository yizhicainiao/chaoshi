<template>
  <el-container id="home">
    <!-- 左侧 -->
    <LeftMeau></LeftMeau>
    <!-- 右框 -->
    <el-container>
      <!-- 右上 -->
      <el-header>
       <RightTop></RightTop>
      </el-header>
      <!-- 右中 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>系统信息</h3>
          </div>
          <div class="text item">
         <!-- 内容 -->
         </div>
        </el-card>
      </el-main>
      <!-- 右下 -->
      <el-footer>
        <rightBottom></rightBottom>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import LeftMeau from '../components/leftMeau';
import RightBottom from '../components/rightBottom';
import RightTop from '../components/rightTop';
export default {
  data() {
    return {
   
    };
  },
  components:{
    LeftMeau,
    RightBottom,
    RightTop
  }

};
</script>

<style>
</style> 