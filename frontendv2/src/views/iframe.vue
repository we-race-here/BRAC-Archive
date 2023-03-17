<template>
    <v-card>
        <v-card-text>
            <v-tabs  center-active v-model="type">
                <v-tab>Road</v-tab>
                <v-tab>Road Cup</v-tab>
                <v-tab>Road Cup Team</v-tab>
                <v-tab>Cross</v-tab>
                <v-tab>Cross Individual Cup</v-tab>
                <v-tab>Cross Team Cup</v-tab>
                <v-tab>Track Omnium</v-tab>
                <v-tab>Result By Rider</v-tab>
                <v-tab>MTB</v-tab>
            </v-tabs>
            <v-tabs-items v-model="type">
                <v-tab-item><road></road></v-tab-item>
                <v-tab-item><roadcup></roadcup></v-tab-item>
                <v-tab-item><roadcupTeam></roadcupTeam></v-tab-item>
                <v-tab-item><cross></cross></v-tab-item>
                <v-tab-item><CrossCup></CrossCup></v-tab-item>
                <v-tab-item><CrossCupTeam></CrossCupTeam></v-tab-item>
                <v-tab-item><Track></Track></v-tab-item>
                <v-tab-item><ResultByRider></ResultByRider></v-tab-item>
                <v-tab-item><MTB></MTB></v-tab-item>
            </v-tabs-items>

        </v-card-text>
    </v-card>
</template>

<script>
import road from './road.vue'
import roadcup from './roadcup.vue'
import roadcupTeam from './roadcupTeam.vue'
import cross from './cross.vue'
import CrossCup from './CrossCup.vue'
import CrossCupTeam from './CrossCupTeam.vue'
import Track from './Track.vue'
import ResultByRider from './ResultByRider.vue'
import MTB from './MTB.vue'
export default {
    components: {
        road, roadcup, roadcupTeam, cross, CrossCup , CrossCupTeam, Track,  ResultByRider, MTB
    },
    data() {
        return {
            types: ["Road"],
            type: 'Road'
        }
    },
}
</script>

<style>
.v-application a {
    color: #5EC6C6 !important;
    text-transform: uppercase;
}

.v-application .primary--text {
    color: #5EC6C6 !important;
}

.body {
    text-transform: uppercase;
}

.fc .fc-button-group>.fc-button {
    text-transform: capitalize;
}

.fc-header-title {
    color: #0052ba;
    background: #000;
    font-size: 30px;
}

.theme--light.v-sheet h1,
.theme--light.v-sheet h2,
.theme--light.v-sheet h3,
.theme--light.v-sheet h4,
.theme--light.v-sheet h5,
.theme--light.v-sheet h6 {
    color: #5EC6C6 !important
}

:root {
    --fc-small-font-size: .85em;
    --fc-page-bg-color: #5EC6C6;
    --fc-neutral-bg-color: rgba(208, 208, 208, 0.3);
    --fc-neutral-text-color: #5EC6C6;
    --fc-border-color: #ddd;

    --fc-button-text-color: white;
    --fc-button-bg-color: #5EC6C6;
    --fc-button-border-color: #5EC6C6;
    --fc-button-hover-bg-color: #1e2b37;
    --fc-button-hover-border-color: #1a252f;
    --fc-button-active-bg-color: #1a252f;
    --fc-button-active-border-color: #151e27;

    --fc-event-bg-color: #3788d8;
    --fc-event-border-color: #3788d8;
    --fc-event-text-color: #fff;
    --fc-event-selected-overlay-color: rgba(0, 0, 0, 0.25);

    --fc-more-link-bg-color: #d0d0d0;
    --fc-more-link-text-color: inherit;

    --fc-event-resizer-thickness: 8px;
    --fc-event-resizer-dot-total-width: 8px;
    --fc-event-resizer-dot-border-width: 1px;

    --fc-non-business-color: rgba(215, 215, 215, 0.3);
    --fc-bg-event-color: rgb(143, 223, 130);
    --fc-bg-event-opacity: 0.3;
    --fc-highlight-color: rgba(188, 232, 241, 0.3);
    --fc-today-bg-color: 'red';
    --fc-now-indicator-color: red;
}
</style>