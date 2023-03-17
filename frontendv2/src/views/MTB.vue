<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card >
          <v-card-title> </v-card-title>
          <v-card-text>
            <!-- <p class="text-h5">MOUNTAIN RESULTS</p> -->
            <div >
              <!-- <h3 style="border-left: 5px solid #1890ff" class="pl-3">
                BRAC MTB RESULTS

              </h3> -->
              <v-row class="ml-3 mt-2">
                <v-col cols="12" sm="2">
                  <v-autocomplete
                    hide-details
                    v-model="SelectedYear"
                    dense
                    :items="Years"
                    label="Year"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-autocomplete
                    hide-details
                    v-model="EventSelected"
                    :loading="EventLoader"
                    :disabled="EventLoader"
                    dense
                    :items="Events"
                    item-value="id"
                    item-text="name"
                    label="Event"
                  >
                  <template v-slot:item="data">
                          <v-list-item-content>
                            <v-list-item-title>
                              
                              {{ data.item.name }}</v-list-item-title
                            >
                            <!-- <v-list-item-subtitle>
                              {{
                                data.item.eventdatetime_format
                              }}-@ {{
                                data.item.eventcity
                              }}
                            </v-list-item-subtitle> -->
                          </v-list-item-content>
                        </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-autocomplete
                    hide-details
                    v-model="GroupSelcted"
                    :loading="GroupLoader"
                    :disabled="GroupLoader"
                    dense
                    :items="Groups"
                    item-value="id"
                    item-text="name"
                    label="Group"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="mt-2">
                <v-col>
                  <!-- <v-text-field                    
                  v-model="ResultSearch"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field> -->
                  <!-- <b>RACE SUMMARY:</b> -->
                  <v-btn-toggle v-show="false" v-model="summaryBy"  dense class="ml-2" borderless>
                    <v-btn >
                      <span class="hidden-sm-and-down">Summary By RaceGroup</span>

                    </v-btn>

                    <!-- <v-btn >
                      <span class="hidden-sm-and-down">Summary By City</span>

                    </v-btn>

                    <v-btn >
                      <span class="hidden-sm-and-down">Summary By Team</span>

                    </v-btn> -->

                  </v-btn-toggle>
                  <v-data-table
                    :loading="EventResultLoader"
                    dense
                    :footer-props="{
                      'items-per-page-options': [15],
                    }"
                    :headers="headers"
                    :items="EventResult.results"
                    item-key="name"
                    :search="ResultSearch"
                    :options.sync="pagination_results"
                    :server-items-length="EventResult.count"
                    class="elevation-1 mt-1"
                  >
                    <template v-slot:item.view_result="{ item }">
                      <a @click="selectedUserModal(item)"
                        >${item.view_result}</a
                      >
                    </template>
                  </v-data-table>
                </v-col>
              </v-row>
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
  mounted() {
    this.getYear();
  },
    data() {
    return {
      Years: [],
      SelectedYear: null,
      Events: [],
      EventLoader: false,
      EventSelected: null,
      EventResult: [],
      EventResultLoader: false,
      GroupSelcted: null,
      Groups: [],
      GroupLoader: false,
      summaryBy: 0,
      pagination_results: {},
      headers: [
        { text: "CATEGORY", value: "eventracegroupid.abbreviation" },
        { text: "STARTERS	", value: "STARTERS" },
        { text: "FINISHERS", value: "FINISHERS" },
      ],
      RaceByCate: [
        { text: "CATEGORY", value: "eventracegroupid.abbreviation" },
        { text: "STARTERS	", value: "STARTERS	" },
        { text: "FINISHERS", value: "FINISHERS" },
      ],
      RaceByCateWithGroup: [
        { text: "Place", value: "place" },
        { text: "TIME", value: "time" },
        { text: "CATEGORY", value: "eventracegroupid.mincategory" },
        { text: "FIRST NAME", value: "racerid.firstname" },
        { text: "Last NAME", value: "racerid.lastname" },
        // { text: "TEAM", value: "" },
        { text: "CITY", value: "racerid.city" },
        // { text: "DETAILS", value: "" },
        
      ],
      RaceByCity: [
        { text: "Home City", value: "CATEGORY" },
        { text: "FINISHERS	", value: "STARTERS	" },
      ],
      RaceByTeam: [
        { text: "TEAM", value: "CATEGORY" },
        { text: "FINISHERS", value: "STARTERS" },
      ],
      ResultSearch: "",
    };
  },

  watch: {
    summaryBy(value) {
      value;
      this.getHeaders();
    },
    EventSelected(value) {
      
      this.GroupLoader = true;
      CycAxios.get(`/AcaEvent/${value}/get_groups/?fields=id,name,starters`).then(
        (data) => {
            this.GroupSelcted = 0
          this.GroupLoader = false;
          this.Groups = data.data;
          this.Groups.push({ name: "Event Summary", id: -1 });
          this.GroupSelcted = -1;
          this.EventResult = [];
          this.EventResult = { results: this.Groups };
        }
      );
    },
    GroupSelcted(value) {
      
      this.EventResult = [];
      if (value == -1) {
        console.log(value);
        this.EventResult = { results: this.Groups };
        this.headers = [
          { text: "CATEGORY", value: "name" },
          { text: "STARTERS	", value: "starters" },
          { text: "FINISHERS", value: "starters" },
        ];
      }
      else{
        this.EventResultLoader = true;
        CycAxios.get("/AcaResultNoPage/?resultsetid="+value).then(
            (data) => {
              this.EventResultLoader = false;
              this.EventResult = {results: data.data};
              this.headers= this.RaceByCateWithGroup
            }
          );  
      }
    },
    SelectedYear(value) {
      this.EventLoader = true;
      CycAxios.get("/AcaEventNoPage/?eventtype=59&ordering=-eventdatetime&eventdatetime__year=" + value).then(
        (data) => {
          this.EventLoader = false;
          this.Events = data.data;
        }
      );
    },
  },
  methods: {
    getHeaders() {
      if (this.summaryBy == 0) {
        this.headers = this.RaceByCate;
      } else if (this.summaryBy == 1) {
        this.headers = this.RaceByCity;
      } else if (this.summaryBy == 2) {
        this.headers = this.RaceByTeam;
      }
    },
    getYear() {
      CycAxios.get("/AcaEvent/get_years/").then((data) => {
        this.Years = data.data;
      });
    },
  },
};
</script>

<style>
</style>