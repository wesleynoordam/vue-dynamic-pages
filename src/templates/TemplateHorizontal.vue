<template>
  <div class="centerDiv">
    <h1>{{block.header}}</h1>
    <div class="leftDiv">
      <h3>{{ $store.state.firstHeader }}</h3>
      <component v-bind:is="block.leftComponent.componentName" v-bind:block="block" />
    </div>
    <div class="rightDiv">
      <h3>{{ $store.state.secondHeader }}</h3>
      <component v-bind:is="block.rightComponent.componentName" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TemplateHorizontal",
  props: {
    block: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centerDiv {
  margin: auto;
  width: 50%;
  height: 100px;
}
.leftDiv {
  float: left;
}
.rightDiv {
  float: right;
}
</style>
