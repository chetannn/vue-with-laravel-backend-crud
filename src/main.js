import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Quotes from './components/quotes.vue';
import NewQuote from './components/new-quote.vue';
import SignUp from './components/signup.vue';

Vue.use(VueRouter);

const routes = [
  {path: '', component: Quotes },
  {path: '/new-quote', component:  NewQuote },
  {path: '/signup', component: SignUp}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
