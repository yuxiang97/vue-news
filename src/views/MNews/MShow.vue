<template>
<div>
    <el-button type="primary" @click="$router.back(-1)">后退</el-button>
    <h4>{{article.title}}</h4>
    <p>{{article.value}}</p>
</div>
</template>

<script>
import axios from 'axios'
export default {
name: "MShow",
data(){
  return{
    article:{}
  }
},
created() {
this.getArticle()
},
methods: {
async getArticle() {
  const { id } = this.$route.params
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
}
};
</script>

<style scoped>

</style>
