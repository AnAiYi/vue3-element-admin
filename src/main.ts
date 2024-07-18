import './style.css'
import App from './App.vue'
import { createApp } from 'vue'
import 'uno.css'
import 'virtual:svg-icons-register';
import {createPinia} from 'pinia';
createApp(App).use(createPinia()).mount('#app')
