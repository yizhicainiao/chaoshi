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
            <el-alert title="警告提示的文案" type="info" show-icon></el-alert>
            <el-alert title="警告提示的文案" type="info" show-icon></el-alert>
        <!-- 两个表格 -->
          <el-row :gutter="40">
              <!-- 左 -->
            <el-col :span="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <h3>销售排行</h3>
                  
                </div>
                <div class="text item">
                  <el-table :data="tableData" stripe style="width: 100%">
                          <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                          <el-table-column prop="salenum" label="销量"></el-table-column>
                  </el-table>
                </div>
              </el-card>
            </el-col>
            <!-- 右 -->
            <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货商品</h3>
                  </div>
                  <div class="text item">
                      <el-table :data="tableData" stripe style="width: 100%">
                          <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                          <el-table-column prop="salenum" label="销量"></el-table-column>
                      </el-table>
                  </div>
                </el-card>
              </el-col>
         </el-row>
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
      isOpened: true,
      tableData:[
        {goodsname: "测试商品1", salenum: 20},
        {goodsname: "测试商品2", salenum: 10},
        {goodsname: "测试商品3", salenum: 20},
        {goodsname: "测试商品4", salenum: 30},
        {goodsname: "测试商品5", salenum: 50}
      ]
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