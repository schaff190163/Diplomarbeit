<template>
    <div class="padtopbot padleftright">
    <table class="uk-table uk-table-divider">
        <thead>
            <tr>
                <th>Datum:</th>
                <th>Event:</th>
                <th>Betrifft:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="uk-text-bold">05.11.2023</td>
                <td>Random Event</td>
                <td>HTL Weiz</td>
            </tr>
            <tr>
                <td class="uk-text-bold">2.12.2023</td>
                <td>Diplomarbeits-Zwischenpräsentationen</td>
                <td>Maturaklassen</td>
                
            </tr>
            <tr>
                <td class="uk-text-bold">22.12.2022</td>
                <td>Start der Weihnachtsferien</td>
                <td>HTL Weiz</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script lang="ts">
import CalendarSingleEntry from './CalendarSingleEntry.vue';

export default {
    name: 'Calendar',
    components: {
        CalendarSingleEntry,
    },
};
</script>

<style>
@media (max-width: 640px) {
    thead {
        display: none;
    }
}
</style>
