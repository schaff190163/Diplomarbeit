<template>
    <div>
        <div class="uk-card uk-card-body partnercard roundedl" @click="sendToURL" :uk-tooltip="'title: ' + partner.name + '; delay: 500'">
            <img :src="partner.logo" class="uk-position-center logopad" width="" height="" :alt="partner.name">
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Card_Partner',
    props: {
        partner: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        sendToURL() {
            window.location.href = this.partner.url;
        },
    },
};
</script>

<style scoped>
.partnercard{
    width: calc(100px + 5vw);
    height: calc(100px + 5vh);
}
.logopad{
    padding: calc(3px + 0.5vh + 0.5vw);
}
.partnergrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    position: relative;
}
</style>
