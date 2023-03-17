<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card elevation="0">
          <v-card-text>
            <!-- <p class="text-h5">Road</p> -->
            <div >
              <!-- <h3 style="border-left: 5px solid #1890ff" class="pl-3">BRAC ROAD RESULTS</h3> -->
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
                    label="Events"
                  >
                    <template v-slot:item="data">
                      <v-list-item-content>
                        <v-list-item-title> {{ data.item.name }}</v-list-item-title>
                        <v-list-item-subtitle>
                          {{ data.item.eventdatetime_format }}-@ {{ data.item.eventcity }}
                        </v-list-item-subtitle>
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
                <v-col cols="12" sm="1">
                  <v-btn small  target="__blank__" :href="`/AcaResultNoPage/?resultsetid=${GroupSelcted}&export=csv&type=road`" v-if="GroupSelcted">Export CSV</v-btn>
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
                  <b>RACE SUMMARY:</b>
                  <v-btn-toggle v-model="summaryBy"  dense class="ml-2" borderless>
                    <v-btn>
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
                      <a @click="selectedUserModal(item)">${item.view_result}</a>
                    </template>
                    <template v-slot:item.name="{ item }">
                      <a @click="selectedCategory(item)">{{ item.name }}</a>
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
import { helpermixin } from '../mixins/helper'
export default {
  mixins: [helpermixin],
  mounted() {
    this.getYear()
    console.log(this.$route.query)
    if (this.$route.query.year) {
      this.SelectedYear = Number(this.$route.query.year)
    }
    if (this.$route.query.event) {
      this.EventSelected = Number(this.$route.query.event)
    }
  },
  methods: {
    selectedCategory(item) {
      this.GroupSelcted = item.id
    },
  },
}
</script>

<style>
</style>