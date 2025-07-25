import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { es } from 'vuetify/locale'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    locale: {
        locale: 'es',
        messages: { es }
    }
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
