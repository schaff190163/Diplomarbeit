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
import ItkView from '../views/ItkView.vue';
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
    },
    {
      path: '/News',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/Erasmus',
      name: 'erasmus',
      component: ErasmusView,
    },
    {
      path: '/wi',
      name: 'wi',
      component: WiView,
    },
    {
      path: '/et',
      name: 'et',
      component: EtView,
    },
    {
      path: '/it',
      name: 'it',
      component: ItView,
    },
    {
      path: '/ut',
      name: 'ut',
      component: UtView,
    },
    {
      path: '/mb',
      name: 'mb',
      component: MbView,
    },
    {
      path: '/at',
      name: 'at',
      component: AtView,
    },
    {
      path: '/awi',
      name: 'awi',
      component: AwiView,
    },
    {
      path: '/mt',
      name: 'mt',
      component: MtView,
    },
    {
      path: '/itk',
      name: 'itk',
      component: ItkView,
    },
    {
      path: '/Team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/Ansprechpartner',
      name: 'ansprechpartner',
      component: AnsprechpartnerView,
    },
    {
      path: '/Students',
      name: 'students',
      component: StudentsView,
    },
    {
      path: '/Teachers',
      name: 'teachers',
      component: TeachersView,
    },
    {
      path: '/Parents',
      name: 'parents',
      component: ParentsView,
    },
    {
      path: '/Anmeldung',
      name: 'anmeldung',
      component: AnmeldungView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    }
  ]
})

export default router;
