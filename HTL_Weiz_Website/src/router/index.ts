import { createRouter, createWebHistory, } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Schulveranstaltungen',
      name: 'schulveranstaltungen',

      component: () => import(/* webpackChunkName: "schulveranstaltungen" */"../views/SchulveranstaltungenView.vue")
    },
    {
      path: '/News',
      name: 'news',

      component: () => import(/* webpackChunkName: "news" */"../views/NewsView.vue")
    },
    {
      path: '/wi',
      name: 'wi',

      component: () => import(/* webpackChunkName: "wi" */"../views/WiView.vue")
    },
    {
      path: '/et',
      name: 'et',

      component: () => import(/* webpackChunkName: "et" */"../views/EtView.vue")
    },
    {
      path: '/it',
      name: 'it',

      component: () => import(/* webpackChunkName: "it" */"../views/ItView.vue")
    },
    {
      path: '/ut',
      name: 'ut',

      component: () => import(/* webpackChunkName: "ut" */"../views/UtView.vue")
    },
    {
      path: '/mb',
      name: 'mb',

      component: () => import(/* webpackChunkName: "mb" */"../views/MbView.vue")
    },
    {
      path: '/at',
      name: 'at',

      component: () => import(/* webpackChunkName: "at" */"../views/AtView.vue")
    },
    {
      path: '/awi',
      name: 'awi',

      component: () => import(/* webpackChunkName: "awi" */"../views/AwiView.vue")
    },
    {
      path: '/mt',
      name: 'mt',

      component: () => import(/* webpackChunkName: "mt" */"../views/MtView.vue")
    },
    {
      path: '/Team',
      name: 'team',

      component: () => import(/* webpackChunkName: "team" */"../views/TeamView.vue")
    },
    {
      path: '/Partner',
      name: 'partner',

      component: () => import(/* webpackChunkName: "partner" */"../views/PartnerView.vue")
    },
    {
      path: '/Students',
      name: 'students',

      component: () => import(/* webpackChunkName: "students" */"../views/StudentsView.vue")
    },
    {
      path: '/Teachers',
      name: 'teachers',

      component: () => import(/* webpackChunkName: "teachers" */"../views/TeachersView.vue")
    },
    {
      path: '/Parents',
      name: 'parents',

      component: () => import(/* webpackChunkName: "parents" */"../views/ParentsView.vue")
    },
    {
      path: '/Anmeldung',
      name: 'anmeldung',

      component: () => import(/* webpackChunkName: "anmeldung" */"../views/AnmeldungView.vue")
    },
    {
      path: '/search',
      name: 'search',

      component: () => import(/* webpackChunkName: "search" */"../views/SearchView.vue")
    },
    {
      path: '/imprint',
      name: 'imprint',

      component: () => import(/* webpackChunkName: "imprint" */"../views/ImprintData.vue")
    },
    {
      path: '/e2mily',
      name: 'e2mily',

      component: () => import(/* webpackChunkName: "e2mily" */"../views/E2milyView.vue")
    },
    {
      path: '/fuerstenfeld',
      name: 'Fürstenfeld',

      component: () => import(/* webpackChunkName: "e2milycontact" */"../views/Fuerstenfeld.vue")
    }
  ]
})

export default router;
