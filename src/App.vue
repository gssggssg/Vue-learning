<template>
  <div id="app">
    <el-button @click="goto('home')">首页</el-button>
    <el-button @click="goto('lifecycle')">切换到生命周期</el-button>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goto(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>