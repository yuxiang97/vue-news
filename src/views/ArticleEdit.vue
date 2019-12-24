<template>
    <div class="content">
        <el-button type="primary" @click="$router.back(-1)">后退</el-button>
        <h1>修改文章</h1>
        <div class="input">
            <div class="title">
                标题: <input type="text" maxlength="20" v-model="article.title">
            </div>
            <div class="describe">
                描述: <input type="text" maxlength="40" v-model="article.describe">
            </div>
        </div>
        <!--<div id="main" class="main">-->
            <!--<mavon-editor v-model="article.value"/>-->
        <!--</div>-->
        <vue-editor v-model="article.value" placeholder="请输入"></vue-editor>
        <el-button type="primary" class="create-article" @click="submitArticle">
            确认修改
        </el-button>
    </div>
</template>

<script>
import axios from 'axios'
import { VueEditor } from "vue2-editor";
export default {
name: "ArticleEdit",
data(){
  return{
    value: '' ,
    article:{}
  }
},
components: {
VueEditor
},
created() {
  this.getArticle()
},
methods: {
  async getArticle() {
    const {id} = this.$route.params
    try {
      const res = await axios.get(`http://localhost:3000/article/${id}`)
      this.article = res.data
      // console.log('fghj')
    } catch (e) {
      this.$notify.error({
        title: '错误',
        message: '网络错误！！！'
      });
    }
  },
  async submitArticle() {
    if (this.article.title) {
      const {id} = this.$route.params
      try {
        await axios.put(`http://localhost:3000/article/${id}`, {
          ...this.article
        })
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
        // this.getArticle()
        this.$router.push({
          name: 'home',
        })
      } catch (e) {
        this.$notify.error({
          title: '错误',
          message: '网络错误！！！'
        });
      }
    } else {
      this.$message.error('标题不能为空');
    }
  }
}
};
</script>

<style scoped lang="scss">
.content {
    width: 1200px;
    margin: 5px auto 0;
    .input {
        margin-top: 10px;
        .title,
        .describe
        {
            height: 45px;
            line-height: 45px;
            /*background: red;*/
            margin-bottom: 10px;

            input[type=text] {
                width: 95%;
                border: none;
                height: 41px;
                border-radius: 10px;
                outline: none;
                padding: 0 10px;
                box-sizing: border-box;
                background: #e9eef3;
            }
        }
    }
    .main {
        margin: 20px 0 ;
    }
}

</style>
