<template>
    <div class="article">
        <el-button type="primary" @click="$router.back(-1)">返回首页</el-button>
        <div class="input">
            <el-button type="danger" @click="del">删除文章</el-button>
            <el-button type="info" @click="linkTo">修改文章</el-button>
        </div>
        <h1>{{article.title}}</h1>
        <p>{{article.value}}</p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
name: "acticleShow",
data(){
  return{
    article:{}
  }
},
created() {
  this.getArticle()
},
methods:{
  async getArticle() {
    const {id} = this.$route.params
    try {
      const res = await axios.get(`http://localhost:3000/article/${id}`)
      this.article = res.data
    } catch (e) {
      this.$notify.error({
        title: '错误',
        message: '网络错误！！！'
      });
      console.log(e)
    }
  },
  del() {
    this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      const {id} = this.$route.params
      try {
        await axios.delete(`http://localhost:3000/article/${id}`)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.$router.push({
          name: 'home'
        })
      } catch (e) {
        console.log(e)
        this.$notify.error({
          title: '错误',
          message: '网络错误！！！'
        });
      }
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
      this.$router.push({
        name: 'home'
      })
    });
  },
  linkTo() {
    this.$router.push({
      name:"article-edit"
    })
  }
}
};
</script>

<style scoped lang="scss">
.article {
    width: 1200px;
    margin: 5px auto 0;

    .input {
        margin-top: 10px;
    }
}
</style>
