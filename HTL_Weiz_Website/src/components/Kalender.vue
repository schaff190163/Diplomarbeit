<template>
    <h1 class="padleftright uk-text-light mpheading padtop">Terminkalender</h1>
    <div class="padbot padleftright">
    <table class="uk-table uk-table-justify uk-table-divider">
        <thead>
            <tr>
                <th class="cdate ctext">Datum:</th>
                <th class="cevent ctext">Event:</th>
                <th class="cconc ctext">Betrifft:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="uk-text-bold cdate ctext">05.11.2023</td>
                <td class="cevent ctext">Random Event</td>
                <td class="cconc ctext">HTL Weiz</td>
            </tr>
            <tr>
                <td class="uk-text-bold cdate ctext">2.12.2023</td>
                <td class="cevent ctext">Diplomarbeits-Zwischenpräsentationen</td>
                <td class="cconc ctext">Maturaklassen</td>
                
            </tr>
            <tr>
                <td class="uk-text-bold cdate ctext">22.12.2022</td>
                <td class="cevent ctext">Start der Weihnachtsferien</td>
                <td class="cconc ctext">HTL Weiz</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script lang="ts">

export default {
    name: 'Kalender',
};
</script>

<style>
@media (max-width: 700px) {
    .cconc {
        display: none;
    }
}
@media screen and (max-width: 640px){
  .ctext{
  font-size: calc(10px + 1vw) !important;
  }
}
</style>
