import { createRouter, createWebHistory, } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SchulveranstaltungenView from '../views/SchulveranstaltungenView.vue';
import AnmeldungView from '../views/AnmeldungView.vue';
import AnsprechpartnerView from '../views/AnsprechpartnerView.vue';
import AtView from '../views/AtView.vue';
import AwiView from '../views/AwiView.vue';
import ParentsView from '../views/ParentsView.vue';
import ErasmusView from '../views/ErasmusView.vue';
import EtView from '../views/EtView.vue';
import ItView from '../views/ItView.vue';
import TeachersView from '../views/TeachersView.vue';
import MtView from '../views/MtView.vue';
import MbView from '../views/MbView.vue';
import NewsView from '../views/NewsView.vue';
import StudentsView from '../views/StudentsView.vue';
import TeamView from '../views/TeamView.vue';
import SearchView from '../views/SearchView.vue';
import UtView from '../views/UtView.vue';
import WiView from '../views/WiView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Schulveranstaltungen',
      name: 'schulveranstaltungen',
      component: SchulveranstaltungenView,

      component: () => import(/* webpackChunkName: "schulveranstaltungen" */"../views/SchulveranstaltungenView.vue")
    },
    {
      path: '/News',
      name: 'news',
      component: NewsView,

      component: () => import(/* webpackChunkName: "news" */"../views/NewsView.vue")
    },
    {
      path: '/Erasmus',
      name: 'erasmus',
      component: ErasmusView,

      component: () => import(/* webpackChunkName: "erasmus" */"../views/ErasmusView.vue")
    },
    {
      path: '/wi',
      name: 'wi',
      component: WiView,

      component: () => import(/* webpackChunkName: "wi" */"../views/WiView.vue")
    },
    {
      path: '/et',
      name: 'et',
      component: EtView,

      component: () => import(/* webpackChunkName: "et" */"../views/EtView.vue")
    },
    {
      path: '/it',
      name: 'it',
      component: ItView,

      component: () => import(/* webpackChunkName: "it" */"../views/ItView.vue")
    },
    {
      path: '/ut',
      name: 'ut',
      component: UtView,

      component: () => import(/* webpackChunkName: "ut" */"../views/UtView.vue")
    },
    {
      path: '/mb',
      name: 'mb',
      component: MbView,

      component: () => import(/* webpackChunkName: "mb" */"../views/MbView.vue")
    },
    {
      path: '/at',
      name: 'at',
      component: AtView,

      component: () => import(/* webpackChunkName: "at" */"../views/AtView.vue")
    },
    {
      path: '/awi',
      name: 'awi',
      component: AwiView,

      component: () => import(/* webpackChunkName: "awi" */"../views/AwiView.vue")
    },
    {
      path: '/mt',
      name: 'mt',
      component: MtView,

      component: () => import(/* webpackChunkName: "mt" */"../views/MtView.vue")
    },
    {
      path: '/Team',
      name: 'team',
      component: TeamView,

      component: () => import(/* webpackChunkName: "team" */"../views/TeamView.vue")
    },
    {
      path: '/Ansprechpartner',
      name: 'ansprechpartner',
      component: AnsprechpartnerView,

      component: () => import(/* webpackChunkName: "ansprechpartner" */"../views/AnsprechpartnerView.vue")
    },
    {
      path: '/Students',
      name: 'students',
      component: StudentsView,

      component: () => import(/* webpackChunkName: "students" */"../views/StudentsView.vue")
    },
    {
      path: '/Teachers',
      name: 'teachers',
      component: TeachersView,

      component: () => import(/* webpackChunkName: "teachers" */"../views/TeachersView.vue")
    },
    {
      path: '/Parents',
      name: 'parents',
      component: ParentsView,

      component: () => import(/* webpackChunkName: "parents" */"../views/ParentsView.vue")
    },
    {
      path: '/Anmeldung',
      name: 'anmeldung',
      component: AnmeldungView,

      component: () => import(/* webpackChunkName: "anmeldung" */"../views/AnmeldungView.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,

      component: () => import(/* webpackChunkName: "search" */"../views/SearchView.vue")
    }
  ]
})

export default router;
