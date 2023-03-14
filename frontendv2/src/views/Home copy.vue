<template>
  <div>
    <v-row>
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="10">
        <carousel />
      </v-col>
      <v-col cols="12" sm="1"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="1"></v-col>
      <v-col cols="12" sm="10">
        <!-- <v-card elevation="0">
          <v-card-title>
            <h3 style="border-left: 5px solid #1890ff" class="pl-3">
              Upcoming Races & Events
              <v-btn small title text @click="$router.push('/Event/all')"
                >View Full >></v-btn
              >
            </h3>
          </v-card-title>
          <v-card-text class="ma-3 pa-0">
      
            <v-row>
              <v-col
                cols="12"
                sm="3"
                class="ma-0 pa-0"
                v-for="i in UpComingEvents"
                v-bind:key="i.id"
              >
                <v-card class="ma-1" max-width="300" elevation="0">
                  <v-card-text>
                    <h3>{{ i.name }}</h3>
                    <v-row align="center" class="mx-0 mt-2">
                      <div v-if="i.promoter" class="grey--text ms-4">
                        Promoter: {{ i.promoter.firstname }}
                        {{ i.promoter.lastname }}
                      </div>
                    </v-row>

                    <div class="mt-2 text-subtitle-3">
                      {{ i.eventdatetime_format }}
                    </div>
                  </v-card-text>

                  <v-card-actions>
                    <a v-if="i.url" :href="i.url">Promoter Url >></a>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card> -->
      </v-col>
      <v-col cols="12" sm="1"></v-col>
    </v-row>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
// import calendar from "../components/calendar.vue";
import CycAxios from '@/plugins/axios.js'

export default {
  name: "Home",
  data() {
    return {
      UpComingEvents: [],
    };
  },
  components: {
    carousel,
    // calendar,
  },
  methods: {
    getUpcomingEvents() {
      CycAxios.get(`/AcaEvent/?ordering=-eventdatetime`).then((data) => {
        console.log(data);
        this.UpComingEvents = data.data.results;
      });
    },
  },
  mounted() {
    this.getUpcomingEvents();
  },
};
</script>
