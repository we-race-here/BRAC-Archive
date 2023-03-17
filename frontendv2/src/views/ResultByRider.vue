<template>
  <div>
    <div class="text-center">
      <v-dialog scrollable v-model="dialog">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2"> Races </v-card-title>

          <v-card-text v-if="dialog">
            <div v-once v-if="selectedUser">
              {{ getUserRaces(selectedUser) }}
            </div>
            <div>
              <!-- <b>->> ${UserEvents}</b> -->
              <v-data-table
                :loading="eventLoader"
                :headers="[
                  { text: 'Name', value: 'eventid.name' },
                  { text: 'City', value: 'eventid.eventcity' },
                  { text: 'Finish Position', value: 'place' },
                  { text: 'Date', value: 'eventid.eventdatetime_format' },
                ]"
                :items="UserEvents"
              >
              <template v-slot:item.eventid.name="{item}">
                <a @click="$router.push({name: 'Road', query: {year: new Date(item.eventid.eventdatetime).getFullYear(), event: item.eventid.id} })">{{item.eventid.name}}</a>
              </template>
              </v-data-table>
              <!-- <v-row class="ma-0 pa-0">
                <v-col
                  class="mt-2 ma-0 pa-0"
                  v-for="i in UserEvents"
                  v-bind:key="i.id"
                >
                  <v-card class="ma-0 pa-0" max-width="200" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">
                          {{ i.eventid.eventcity ? i.eventid.eventcity : "-" }}
                        </div>
                        <v-list-item-title
                          :title="i.eventid.name"
                          class="text-h5 mb-1"
                        >
                          {{ i.eventid.name }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          i.eventid.eventdate
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions> </v-card-actions>
                  </v-card>
                </v-col>
              </v-row> -->
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-row>
      <v-col cols="12" sm="12">
        <v-card >
          <v-card-title> </v-card-title>
          <v-card-text>
            <!-- <p class="text-h5">Result By Rider</p> -->
            <div >
              <v-card class="ma-2">
                <v-card-title>
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="Usersearch"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-card-title>
                <v-data-table
                  :loading="UserLoader"
                  dense
                  :footer-props="{
                    'items-per-page-options': [15],
                  }"
                  :headers="headers"
                  :items="AcaUsers.results"
                  item-key="name"
                  :search="Usersearch"
                  :options.sync="pagination_myrequest"
                  :server-items-length="AcaUsers.count"
                  class="elevation-1"
                >
                  <template v-slot:item.view_result="{ item }">
                    <a @click="selectedUserModal(item)">{{
                      item.view_result
                    }}</a>
                  </template>
                </v-data-table>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CycAxios from '@/plugins/axios.js'

export default {
  data: () => ({
    dialog: false,
    selectedUser: null,
    UserEvents: [],
    eventLoader: false,

    AcaUsers: [],
    pagination_myrequest: {},
    Usersearch: "",
    UserLoader: false,

    AcaEvent: [],
    pagination_events: {},
    Eventsearch: "",
    EventLoader: false,

    AcaRaceGroup: [],
    pagination_AcaRaceGroup: {},
    AcaRaceGroupsearch: "",
    AcaRaceGroupLoader: false,

    AcaResult: [],
    pagination_AcaResult: {},
    AcaResultsearch: "",
    AcaResultLoader: false,

    headers: [
      { text: "First Name", value: "firstname" },
      { text: "Last Name", value: "lastname" },
      { text: "City", value: "city" },
      { text: "State", value: "state" },
      { text: "View Results", value: "view_result" },
    ],

    Eventheaders: [
      { text: "Event Name", value: "name" },
      { text: "Event Date", value: "eventdate" },
      { text: "Event City", value: "eventcity" },
      { text: "Event State", value: "eventstate" },
    ],
    AcaRaceGroupheaders: [
      { text: "Event Name", value: "name" },
      { text: "Abbreviation", value: "abbreviation" },
    ],
    AcaResultheaders: [
      { text: "Racer Id", value: "racerid.firstname" },
      { text: "Event id", value: "eventid.name" },
      { text: "Event Date", value: "eventid.eventdate" },
      { text: "place", value: "place" },
    ],
  }),
  watch: {
    Usersearch(value) {
      value;
      this.getUsers({});
    },
    Eventsearch(value) {
      value;
      this.getEvent({});
    },
    AcaRaceGroupsearch(value) {
      value;
      this.getAcaRaceGroupsearch({});
    },
    AcaResultsearch(value) {
      value;
      this.getAcaResult({});
    },
    pagination_myrequest: {
      handler(value) {
        this.getUsers(value);
      },
      deep: true,
    },
    pagination_events: {
      handler(value) {
        this.getEvent(value);
      },
      deep: true,
    },
    pagination_AcaRaceGroup: {
      handler(value) {
        this.getAcaRaceGroupsearch(value);
      },
      deep: true,
    },
    pagination_AcaResult: {
      handler(value) {
        this.getAcaResult(value);
      },
      deep: true,
    },
  },
  mounted() {},
  methods: {
    FormURL(event, endpoint) {
      var query_param = "";
      var link = endpoint;
      try {
        // Ordering Logic
        if (event.sortBy.length >= 1) {
          for (var [i, v] of event.sortBy.entries()) {
            if (event.sortDesc[i]) {
              query_param += "&ordering=-" + v + "&";
            } else {
              query_param += "&ordering=" + v + "&";
            }
          }
        }
        // Pagination
        link += "&page=" + event.page;
        return link + query_param;
      } catch (err) {
        return link;
      }
    },
    getUsers(event) {
      this.UserLoader = true;
      CycAxios.get(
        this.FormURL(
          event,
          "/AcaUser/?fields=id,firstname,lastname,city,state,view_result"
        ) +
          "&search=" +
          this.Usersearch,
        {
          method: "GET",
        }
      ).then((data) => {
        this.AcaUsers = data.data;
        this.UserLoader = false;
      });
    },
    getEvent(event) {
      this.AcaEvent = [];
      this.EventLoader = true;
      CycAxios.get(
        this.FormURL(event, "/AcaEvent/?fields=id,name,eventcity,eventstate") +
          "&search=" +
          this.Eventsearch,
        {
          method: "GET",
        }
      ).then((data) => {
        this.AcaEvent = data.data;
        this.EventLoader = false;
      });
    },
    getAcaRaceGroupsearch(event) {
      this.AcaRaceGroup = [];
      this.AcaRaceGroupLoader = true;
      CycAxios.get(
        this.FormURL(event, "/AcaRacegroup/?fields=id,name,abbreviation") +
          "&search=" +
          this.AcaRaceGroupsearch,
        {
          method: "GET",
        }
      ).then((data) => {
        this.AcaRaceGroup = data.data;
        this.AcaRaceGroupLoader = false;
      });
    },
    getAcaResult(event) {
      this.AcaResult = [];
      this.AcaResultLoader = true;
      CycAxios.get(
        this.FormURL(event, "/AcaResult/?fields=id,racerid,eventid,place") +
          "&search=" +
          this.AcaResultsearch,
        {
          method: "GET",
        }
      ).then((data) => {
        this.AcaResult = data.data;
        this.AcaResultLoader = false;
      });
    },
    selectedUserModal(items) {
      this.UserEvents = [];
      this.selectedUser = items;
      this.getUserRaces();
      this.dialog = true;
      console.log(items);
    },
    getUserRaces() {
      this.eventLoader = true;
      CycAxios.get(
        this.FormURL(event, "/AcaResultNoPage/?") +
          "&racerid=" +
          this.selectedUser.id,
        {
          method: "GET",
        }
      ).then((data) => {
        this.eventLoader = false;
        this.UserEvents = data.data;
      });
    },
  },
};
</script>

<style>
</style>