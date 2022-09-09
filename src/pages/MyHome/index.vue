<template>
  <div>
    <h2>{{ $store.state.home.msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  data() {
    return {
      msg: "这里是首页",
    };
  },
};
</script>
