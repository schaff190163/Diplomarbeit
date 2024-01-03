import { createRouter, createWebHistory, } from 'vue-router';
import HomeView from '../views/sonstiges/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/News',
      name: 'news',

      component: () => import(/* webpackChunkName: "news" */"../views/aktuelles/News.vue")
    },
    {
      path: '/wi',
      name: 'wi',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/WI.vue")
    },
    {
      path: '/et',
      name: 'et',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/WI.vue")
    },
    {
      path: '/it',
      name: 'it',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/IT.vue")
    },
    {
      path: '/ut',
      name: 'ut',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/UT.vue")
    },
    {
      path: '/mb',
      name: 'mb',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/MB.vue")
    },
    {
      path: '/at',
      name: 'at',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/AT.vue")
    },
    {
      path: '/mt',
      name: 'mt',

      component: () => import(/* webpackChunkName: "wi" */"../views/14/MT.vue")
    },
    {
      path: '/awi',
      name: 'awi',

      component: () => import(/* webpackChunkName: "wi" */"../views/18/AWI.vue")
    },
    {
      path: '/Team',
      name: 'team',

      component: () => import(/* webpackChunkName: "team" */"../views/unsereschule/Team.vue")
    },
    {
      path: '/Partner',
      name: 'partner',

      component: () => import(/* webpackChunkName: "partner" */"../views/unsereschule/Partner.vue")
    },
    {
      path: '/Students',
      name: 'students',

      component: () => import(/* webpackChunkName: "students" */"../views/services/Students.vue")
    },
    {
      path: '/Teachers',
      name: 'teachers',

      component: () => import(/* webpackChunkName: "teachers" */"../views/services/Teachers.vue")
    },
    {
      path: '/Parents',
      name: 'parents',

      component: () => import(/* webpackChunkName: "parents" */"../views/services/Parents.vue")
    },
    {
      path: '/imprint',
      name: 'imprint',

      component: () => import(/* webpackChunkName: "imprint" */"../views/sonstiges/Imprint.vue")
    },
    {
      path: '/elternverein',
      name: 'elternverein',

      component: () => import(/* webpackChunkName: "imprint" */"../views/unsereschule/ElternVerein.vue")
    },
    {
      path: '/warumwir',
      name: 'warumwir',

      component: () => import(/* webpackChunkName: "imprint" */"../views/14/WarumWir.vue")
    },
    {
      path: '/aufnahmeverfahren',
      name: 'aufnahmeverfahren',

      component: () => import(/* webpackChunkName: "imprint" */"../views/aufnahme/AufnahmeVerfahren.vue")
    },
    {
      path: '/vorteilehtl',
      name: 'vorteilehtl',

      component: () => import(/* webpackChunkName: "imprint" */"../views/aufnahme/VorteileHTL.vue")
    },
    {
      path: '/kennenlernangebote',
      name: 'kennenlernangebote',

      component: () => import(/* webpackChunkName: "imprint" */"../views/aufnahme/KennenlernAngebote.vue")
    },
    {
      path: '/schnuppern',
      name: 'schnuppern',

      component: () => import(/* webpackChunkName: "imprint" */"../views/aufnahme/Schnuppern.vue")
    },
    {
      path: '/tagderoffenentuer',
      name: 'tagderoffenentuer',

      component: () => import(/* webpackChunkName: "imprint" */"../views/aufnahme/TagDerOffenenTür.vue")
    },
    {
      path: '/e2mily',
      name: 'e2mily',

      component: () => import(/* webpackChunkName: "e2mily" */"../views/E2milyView.vue")
    },
    {
      path: '/e2mily/contact',
      name: 'e2mily_contact',

      component: () => import(/* webpackChunkName: "e2milycontact" */"../views/E2milyContact.vue")
    },

  ]
})

export default router;
