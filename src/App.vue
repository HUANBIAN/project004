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
                <div>
                  <h1>
                    <a href="#" title="logo">logo</a>
                  </h1>
                </div>
              </el-col>
              <el-col :span="15">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="主页" name="zhuye">主页</el-tab-pane>
                  <el-tab-pane label="关于我们" name="guanyuwomen" >关于我们</el-tab-pane>
                  <el-tab-pane label="联系我们" name="lianxiwomen">联系我们</el-tab-pane>
                </el-tabs>
              </el-col>
              <el-col :span="4">
                <el-input placeholder="输入关键字" suffix-icon="el-icon-search" v-model="input1"></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24" class="hidden-sm-and-up">移动端导航条</el-col>
        </el-row>
      </div>
    </el-header>

    <el-main>
      <div class="block">
        <el-carousel trigger="click" height="550px" indicator-position="none">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>


    </el-main>

    


    <el-footer style="height: 400px;">
      <el-row>
        <el-col :span="24">
            <div class="dingbu-1">
                <el-row type="flex">
                  <el-col :xs="22" :sm="22" :md="22" :lg="4" :xl="4">
                    <div class="my-weibo">
                      <el-button plain >关注我的微博</el-button>
                    </div>
                  </el-col>
                </el-row>
            </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
            <div class="dingbu-2 top">
               
            </div>
        </el-col>
      </el-row>
    </el-footer>






  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      activeName: "zhuye"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  background-color: #163258;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #1c8025;
}

.el-footer {
  background-color: #eee;
    padding: 0;
    .dingbu-1{
      height: 100px;
      padding-top: 32px;
      background-color: #bbb;
      .el-row{
        justify-content: center;
        
      }
    }
    .dingbu-2{
      height: 60px;
      background-color: #ccc;
    }
}

.my-weibo{
  background-color: #693a94;
  height: 35px;
  .el-button{
    width: 100%;
    border-radius: 0px
  }
}
</style>



