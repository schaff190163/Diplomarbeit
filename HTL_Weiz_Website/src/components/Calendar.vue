<template>
    <div class="padtopbot padleftright">
    <table class="uk-table uk-table-justify uk-table-divider">
        <thead>
            <tr>
                <th class="cdate">Datum:</th>
                <th class="cevent">Event:</th>
                <th class="cconc">Betrifft:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="uk-text-bold cdate">05.11.2023</td>
                <td class="cevent">Random Event</td>
                <td class="cconc">HTL Weiz</td>
            </tr>
            <tr>
                <td class="uk-text-bold cdate">2.12.2023</td>
                <td class="cevent">Diplomarbeits-Zwischenpräsentationen</td>
                <td class="cconc">Maturaklassen</td>
                
            </tr>
            <tr>
                <td class="uk-text-bold cdate">22.12.2022</td>
                <td class="cevent">Start der Weihnachtsferien</td>
                <td class="cconc">HTL Weiz</td>
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
@media (max-width: 700px) {
    .cconc {
        display: none;
    }
}
</style>
