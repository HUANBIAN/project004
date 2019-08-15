<template>
  <el-container>
    <el-row>
      <el-col :span="24" class="hidden-xs-only">
        <div class="top top-1">
          <el-row type="flex">
            <el-col :span="8">关注我的微博：@xxx.com</el-col>
            <el-col :span="8">
              <el-link icon="el-icon-edit"></el-link>
              <el-link icon="el-icon-share"></el-link>
              <el-link icon="el-icon-delete"></el-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-header>
      <div class="top top-2">
        <el-row>
          <el-col :span="24" class="hidden-xs-only">
            <el-row>
              <el-col :span="5">
                log
              </el-col>
              <el-col :span="15">
                daohang
              </el-col>
              <el-col :span="4">
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="hidden-sm-and-up">移动端导航条</el-col>
        </el-row>
      </div>
    </el-header>

    <el-main>
      <div class="block">
        <el-carousel trigger="click" height="550px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-main>

    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data(){
    return{ 
      input1:''
    }
  }
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
.top {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
}

.top-1 {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  .el-row {
    justify-content: space-between;
    .el-col:nth-child(2) {
      text-align: right;
      .el-divider__text,
      .el-link {
        font-size: 18px;
      }
    }
  }
}

.el-header {
  padding: 0;
  line-height: 60px;
  background-color: #eee;
}

.el-main {
  padding: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>



