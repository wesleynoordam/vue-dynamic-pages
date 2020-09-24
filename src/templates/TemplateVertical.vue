<template>
  <div class="wrapperDiv">
    <h1>{{block.header}}</h1>
    <div class="topDiv">
      <h3>{{ $store.state.firstHeader }}</h3>
      <component v-bind:is="block.topComponent.componentName" v-bind:block="block" />
    </div>
    <div class="bottomDiv">
      <h3>{{ $store.state.secondHeader }}</h3>
      <component v-bind:is="block.bottomComponent.componentName" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateVertical",
  props: {
    block: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topDiv {
  margin: auto;
  display: block;
  width: 50%;
}
.bottomDiv {
  margin: auto;
  display: block;
  width: 50%;
}
</style>
