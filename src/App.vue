<template>
  <div id="app">
    <keepAlive>
      <router-view/>
    </keepAlive>
  </div>
</template>

<style  lang="scss">
// scoped
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
