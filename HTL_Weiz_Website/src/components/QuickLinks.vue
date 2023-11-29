<template>
    <div>
        <div class="qlgrid padleftright padtop padbot">
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Team der HTL Weiz; delay: 500"><router-link to="/team" class="qllink">Team</router-link></button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Schüler; delay: 500"><router-link to="/students" class="qllink">SchülerInnen</router-link></button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Eltern und erziehungsberechtigte; delay: 500"><router-link to="/parents" class="qllink">Eltern</router-link></button>
              <button class="uk-button uk-button-primary roundedl" uk-tooltip="title: Service für Lehrpersonal; delay: 500"><router-link to="/teachers" class="qllink">LehrerInnen</router-link></button>
        </div>
    </div>
</template>

<script lang="ts">
import SmallCard from './SmallCard.vue';

export default {
    name: 'QuickLinks',
    components: {
        SmallCard,
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