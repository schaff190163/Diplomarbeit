<template>
    <div class="event">
        <div class="date">September 15, 2023</div>
        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
</template>

<script lang="ts">
/* import ... from ...; */

export default {
    name: 'CalendarSingleEntry',
    components: {
        /*,*/
    },
};
</script>

<style>
.event {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
}

.date {
    font-weight: bold;
}

.description {
    margin-top: 5px;
}
</style>
