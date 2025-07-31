// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login     from '../views/login.vue'
import Registro  from '../views/registro.vue'
import Catalogo  from '../views/catalogo.vue'
import Contacto  from '../views/contacto.vue'
import Acerca from '../views/Acerca.vue'
const routes = [
  { path: '/',           name: 'Login',    component: Login },
  { path: '/registro',   name: 'Registro', component: Registro },
  { path: '/catalogo',   name: 'Catalogo', component: Catalogo },
  { path: '/contacto',   name: 'Contacto', component: Contacto },
  {path: '/Acerca', name: 'Acerca', component: Acerca},
  { path: '/:pathMatch(.*)*', redirect: '/' } // opcional, redirige lo no definido
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
