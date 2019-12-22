<template>
  <div class="home" >
    <el-container>
      <el-header>News Edit Page</el-header>
      <el-container>
        <el-aside width="200px">
          <ul class="ul">
            <li class="li">
              主页
            </li>
            <li class="li">
              关于我们
            </li>
          </ul>
        </el-aside>
        <el-main class="block">
            <div class="header">
              <span class="num">序号</span>
              <span class="title">标题</span>
              <span class="describe">描述</span>
              <span class="operation">操作
              <el-button type="primary"
                         icon="el-icon-plus"
                         title="新建内容"
                         class="new"
                         @click="linkTo">
                新建
              </el-button>
              </span>
            </div>
            <div class="box">
              <div v-if="article.length === 0">
                  <h4 class="warning-language">暂时没有数据，请添加！！！</h4>
              </div>
              <!--<div v-else>-->
              <div v-else class="header" v-for="(item,index) in article" :key="index">
                <span class="num">{{index+1}}</span>
                <span class="title">{{item.title}}</span>
                <span class="describe">{{item.describe}} </span>
                <span class="operation">
                  <router-link :to="{ name: 'acticle-Show', params: { id: item.id } }" class="title1">
                    <el-button>
                      查看文章详情
                    </el-button>
                  </router-link>
                </span>
              </div>
              <!--</div>-->
            </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "home",
  data() {
    return {
      article: [],
    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/article')
      this.article = res.data
      // console.log(res.data)
      // console.log(res.data.title)
      // console.log(res.data.describe)
    } catch (e) {
      this.$notify.error({
        title:"错误!!",
        message:"加载错误!!!!"
      })
    }
  },
  methods:{
    linkTo() {
      this.$router.push({
        name:"news-create"
      })
    },
    show(){
      this.$router.push({
        name:"acticle-show"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
 height: 100%;
 width: 100%;
}

.el-header {
  /*position: fixed;*/

  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height:calc(100vh - 60px);
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.ul {
  margin: 0;
  padding: 0;
  list-style: none;
  .li {
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background: rgba(40,40,40,.1);
    }
  }
}

.el-main[data-v-fae5bece] {
  line-height: 1;
}

.el-main {
padding: 0;
}

.block {
  /*padding: 20px;*/
  margin: 20px;
  box-sizing: border-box;
  border: 1px solid #999;
  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
    text-align: left;
    display: flex;
    span {
      display: block;
      height: 100%;
      /*background: aqua;*/
      border-right: 1px solid #999;
      /*text-align: center;*/
      font-size: 14px;
      box-sizing: border-box;
      padding: 0 5px;
    }
    .num {
      width: 10%;
    }
    .title {
      width: 25%;
    }
    .describe {
      width: 50%;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .operation {
      width: 15%;
      text-align: center;
      .new {
        margin-left: 20px;
      }
      .title1 {

      }
    }
  }
  .box {
    height: 100%;
    /*background: rebeccapurple;*/
    overflow-y: auto;
    .warning-language {
      font-size: 23px;
      color: #999;
      margin-top: 100px;
    }
  }
}

</style>
