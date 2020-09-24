import Vue from 'vue'

const TemplateHorizontal = Vue.component('TemplateHorizontal', function (resolve) {
    require(['./TemplateHorizontal.vue'], resolve)
})

const TemplateVertical = Vue.component('TemplateVertical', function (resolve) {
    require(['./TemplateVertical.vue'], resolve)
})

export default [
    TemplateHorizontal,
    TemplateVertical
]