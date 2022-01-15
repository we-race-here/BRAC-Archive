<template>
  <v-app>
    <v-banner color="white" app sticky transition="slide-y-transition">
      <v-row class="ma-0 pa-0">
        <v-col cols="12" sm="6" class="ma-0 pa-0">
          <v-card elevation="0" height="100">
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pa-0">
                <v-img
                title="Home"
                style="cursor:pointer"
                @click="$router.push('/')"
                class="ma-3"
                  height="80"
                  width="350"
                  src="@/assets/brac_newlogo2.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" class="mt-5">
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a v-bind="attrs" v-on="on"
                >Events <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item>
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a class="ml-5" v-bind="attrs" v-on="on"
                >Results <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item @click="$router.push(i.url)" v-for="i in Results" v-bind:key="i">
                <v-list-item-title>{{i.name}}</v-list-item-title>
              </v-list-item>              
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a class="ml-5" v-bind="attrs" v-on="on"
                >Programs <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item>
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a class="ml-5" v-bind="attrs" v-on="on"
                >Resources <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item>
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a class="ml-5" v-bind="attrs" v-on="on"
                >About <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item>
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary"  >
                Scale Transition
              </v-btn> -->
              <a class="ml-5" v-bind="attrs" v-on="on"
                >News <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item>
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- <v-btn class="ml-5" small color="primary">Login</v-btn> -->
        </v-col>
      </v-row>
    </v-banner>

    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        @ copyright {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    Results: [
      {"name": "Road", "url": "Road"},
      {"name": "Road Cup", "url": "RoadCup"},
      {"name": "Road Cup Team", "url": "RoadCupTeam"},
      {"name": "Cross", "url": "Cross"},
    ]
  }),
};
</script>
