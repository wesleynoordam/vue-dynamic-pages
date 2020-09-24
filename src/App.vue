<template>
  <div id="app">
    <template v-for="layoutTemplate in content">
      <component
        v-bind:is="content.layoutTemplate.template"
        v-bind:block="layoutTemplate"
        v-bind:key="layoutTemplate.template"
      />
    </template>
  </div>
</template>

<script>
function configureApplication() {
  import("./stylesheets/" + this.customerInformation.css)

  if (
    this.customerInformation.name === "customer"
  ) {
    this.content = {
      "layoutTemplate": {
        "template": "TemplateVertical",
        "header": "Vertical template",
        "topComponent": {
          "header": "Header top component",
          "componentName": "LargeHeaderComponent"
        },
        "bottomComponent": {
          "header": "Header bottom component",
          "componentName": "SmallHeaderComponent"
        }
      }
    };
  } else {
    this.content = {
      "layoutTemplate": {
        "template": "TemplateHorizontal",
        "header": "Horizontal template",
        "leftComponent": {
          "header": "Header left component",
          "componentName": "LargeHeaderComponent"
        },
        "rightComponent": {
          "header": "Header right component",
          "componentName": "SmallHeaderComponent"
        }
      }
    };
  }
}

import { mapState } from 'vuex'

export default {
  name: "app",
  data: function() {
    return {
      content: {}
    };
  },
  computed: mapState(['customerInformation']),
  created: configureApplication
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
