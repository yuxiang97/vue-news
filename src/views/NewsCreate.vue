<template>
    <div class="create">
        <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back(-1)">
            返回首页
        </el-button>
        <h1>创建文章</h1>
        <div class="input">
            <div class="title">
                标题: <input type="text" maxlength="20" v-model="article.title">
            </div>
            <div class="describe">
                描述: <input type="text" maxlength="40" v-model="article.describe">
            </div>
        </div>
        <!--<div id="main">-->
            <!--<mavon-editor v-model="article.value"/>-->
        <!--</div>-->
        <vue-editor v-model="article.value"></vue-editor>
        <el-button type="primary" class="create-article" @click="articleCreate">
            创建文章
        </el-button>
    </div>
</template>

<script>
import axios from 'axios'
import { VueEditor } from "vue2-editor";

export default {
name: "NewsCreate",
  data() {
    return {
      article:{
        describe: '',
        title: '',
        value: '' ,
      }
    }
  },
  components: {
    VueEditor
  },
  methods:{
    async articleCreate() {
      if (this.article.title) {
        try {
          await axios.post('http://localhost:3000/article', {
            ...this.article
          })
          this.$router.go(-1)
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        }
      }else {
        this.$message.error('标题不能为空');
      }
    }
  }
};
</script>

<style scoped lang="scss">
.create {
    width: 1200px;
    margin: 10px auto 0;
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
    .create-article {
        margin-top: 10px;
    }
}

</style>
