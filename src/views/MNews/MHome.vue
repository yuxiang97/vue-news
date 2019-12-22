<template>
    <div>
        <header>
            新闻
        </header>
        <div class="content">
            <div v-for="(item,index) in article" :key="index" class="title">
            <router-link :to="{ name: 'm-show', params: { id: item.id } }" class="link">
                <h4>{{item.title}}</h4>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
name: "MHome",
data(){
  return{
    article: [],
  }
},
async created() {
  try {
    const res = await axios.get('http://localhost:3000/article')
    this.article = res.data
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

<style scoped lang="scss">
html,
body
{
    font-size: 26.6666666666vw;
    header {
        height: 3rem;
        background: red;
        /*width: 100%;*/
        text-align: center;
        line-height: 3rem;
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .content {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        overflow-x: hidden;
        .title {
            line-height: 3rem;
            height: 3rem;
            width: 100%;
            border-bottom: .1rem solid #f3ffff;
            background: #f3ffff;
            padding: 0 1rem;
            .link {
                text-decoration: none;
                color: #999;
            }
        }
    }

}


</style>
