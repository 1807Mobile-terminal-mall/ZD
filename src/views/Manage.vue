<template>
  <div class="manage">
    <div class="box">
      当家
    </div>
    <TabBar :tabs="tabs"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import TabBar from '@/components/common/TabBar.vue'
export default {
  components: {
    TabBar
  },
  computed: {
    ...mapState(['tabs'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 60px;
  overflow: scroll;
}
</style>
