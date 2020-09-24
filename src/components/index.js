import Vue from 'vue'

const LargeHeaderComponent = Vue.component('LargeHeaderComponent', function (resolve) {
    require(['./LargeHeaderComponent.vue'], resolve)
})

const SmallHeaderComponent = Vue.component('SmallHeaderComponent', function (resolve) {
    require(['./SmallHeaderComponent.vue'], resolve)
})

export default [
    LargeHeaderComponent,
    SmallHeaderComponent
]

