<template>
    <div>
        <h1 class="padleftright uk-text-light mpheading padtop">Quick Links</h1>
        <div class="qlgrid padleftright">
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Team der HTL Weiz; delay: 500" @click="navigateTo('/team')">Team</button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Schüler; delay: 500" @click="navigateTo('/students')">SchülerInnen</button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Eltern und erziehungsberechtigte; delay: 500" @click="navigateTo('/parents')">Eltern</button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Lehrpersonal; delay: 500" @click="navigateTo('/teachers')">LehrerInnen</button>
        </div>
    </div>
</template>

<script lang="ts">
import SmallCard from './Card_Small.vue';

export default {
    name: 'QuickLinks_Home.vue',
    components: {
        SmallCard,
    },
    methods: {
        navigateTo(route: string) {
            this.$router.push(route);
        },
    },
};
</script>

<style>/* Styles for this component */
.qlgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.qllink {
    color: #F8F8F8;
}

@media (max-width: 900px) {
    .qlgrid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 450px) {
    .qlgrid {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>