import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import Contact from "./views/Contact.vue"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import FormDemo from "./components/FormDemo.vue"
import IconDemo from "./components/IconDemo.vue"
import InputDemo from "./components/InputDemo.vue"
import ScrollDemo from "./components/ScrollDemo.vue"
import TableDemo from "./components/TableDemo.vue"
import TreeDemo from "./components/TreeDemo.vue"

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'form', component: FormDemo},
        {path: 'icon', component: IconDemo},
        {path: 'input', component: InputDemo},
        {path: 'scroll', component: ScrollDemo},
        {path: 'switch', component: SwitchDemo},
        {path: 'table', component: TableDemo},
        {path: 'tree', component: TreeDemo}
      ]
    }
  ]
})
const app = createApp(App)
app.use(router);
app.mount('#app')
