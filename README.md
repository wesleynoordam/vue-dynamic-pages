# Vue Dynamic Pages
Rebuilding websites for clients can become quite expensive. VueJS has this cool feature to build dynamic websites which can then be used to adjust the website based on your DNS. This is a dynamic VueJS website where the website adjusts both its layout and style based on the DNS you use to connect to it. The two options are: http://localhost and http://127.0.0.1. The loading of the layout and css is done in the App.vue. The layout and css is placed at a global level so the application can always reach it when needed.
- Global registration of components is done in the main.js so the component are always known when they are needed to load.
- Global state management in main.js and store/index.js is added with help of Vuex so the data is always available.
- Global css folder containing all client specific css files.

# How to run
## Project setup
npm install

## Project run
npm run serve
