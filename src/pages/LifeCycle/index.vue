<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      msg: "生命周期",
    };
  },
  beforeCreate() {
    console.log(
      "beforeCreate ——",
      "组件实例被创建之初，data 和 methods 中的数据还没有初始化"
    );
  },
  created() {
    console.log(
      "created ——",
      "组件实例已经完全创建，data 和 methods 都已经初始化好了"
    );
  },
  beforeMount() {
    console.log(
      "beforeMount ——",
      "模板渲染，相关的 render 函数首次被调用，模板已经在内存中编译好了，但是尚未挂载到页面中去"
    );
  },
  mounted() {
    console.log(
      "mounted ——",
      "el 被新创建的 vm.e l 替 换 ， 真 实 d o m 已 经 生 成 ， el 替换，真实 dom 已经生成，el替换，真实dom已经生成，el 可用，组件脱离创建阶段，进入运行阶段"
    );
  },
  beforeUpdate() {
    console.log(
      "beforeUpdate ——",
      "组件数据更新之前调用， 此时页面中显示的数据还是旧的，但 data 是最新的，页面尚未和最新的数据保持同步"
    );
  },
  update() {
    console.log(
      "update ——",
      "组件数据更新之后，页面和 data 数据已经保持同步，都是最新的"
    );
  },
  beforeDestory() {
    console.log(
      "destoryed ——",
      "组件销毁前调用，vue 实例从运行阶段进入到销毁阶段，这时 vue 实例身上所有都可用，还没有真正执行销毁"
    );
  },
  destoryed() {
    console.log("destoryed ——", "组件销毁后调用，vue 实例上的所有都不可以用了");
  },
};
</script>
