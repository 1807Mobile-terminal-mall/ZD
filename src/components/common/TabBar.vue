<template>
    <ul class="footer" >
      <li v-for="(item,index) in tabs" :class="{active:index===tabIndex()}" :key="index" @click="go(item.path,index)">
        <i :class="item.icon"></i>
        <span>{{item.label}}</span>
      </li>
    </ul>
</template>
<script>
export default {
  props:['tabs'],
  methods: {
    tabIndex(){
      return parseInt(window.sessionStorage.getItem('ZD-tabIndex')) || 0
    },
    go(path,index){
      if(index === this.tabIndex()){
        return
      }
      window.sessionStorage.setItem('ZD-tabIndex',index)
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
    overflow: hidden;
    height: 60px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    li{
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &.active{
        color:red;
      }
      i{
        font-size: 24px;
        padding-bottom: 5px;
      }
    }
    
}
</style>