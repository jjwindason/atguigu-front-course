import { createApp } from 'vue'
import App from './App.vue'
// 第一步：引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
// 第二步：创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)
app.mount('#app')

console.log('createApp', createApp)
console.log('vm', app)
console.log(createApp.prototype === app.__proto__)

function deepClone(obj: any) {
    let copyObj: any = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOnwProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
                copyObj[key] = deepClone(obj[key])
            } else {
                copyObj[key] = obj[key]
            }
        }
    }
    return copyObj
}
console.log({} instanceof Object)