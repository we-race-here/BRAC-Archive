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
                  style="cursor: pointer"
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
              <a v-bind="attrs" v-on="on"
                >Events <v-icon color="primary">mdi-chevron-down</v-icon></a
              >
            </template>

            <v-list dense outlined>
              <v-list-item @click="$router.push('/Event/all')">
                <v-list-item-title>All Events</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/AllEvents')">
                <v-list-item-title>All Events(List View)</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/Event/raceOnly')">
                <v-list-item-title>Races Only</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/Event/GravelEvents')">
                <v-list-item-title>Gravel Events</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/Event/GranFondo')">
                <v-list-item-title>Gran Fondo</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/Event/Meeting')">
                <v-list-item-title>Meeting</v-list-item-title>
              </v-list-item>
              <v-list-item @click="$router.push('/Event/CROSSCLINIC')">
                <v-list-item-title>CROSS CLINIC</v-list-item-title>
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
              <v-list-item
                @click="$router.push(i.url)"
                v-for="i in Results"
                v-bind:key="i"
              >
                <v-list-item-title>{{ i.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">

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
          </v-menu> -->
          <!-- <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">

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
          </v-menu> -->
          <!-- <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">

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
          </v-menu> -->
          <!-- <v-menu
            open-on-hover
            offset-y
            rounded="lg"
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">

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
          </v-menu> -->

          <!-- <v-btn class="ml-5" small color="primary">Login</v-btn> -->
        </v-col>
      </v-row>
    </v-banner>

    <v-main>
      <router-view />
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        @ {{ new Date().getFullYear() }}
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
      { name: "Road", url: "/Road" },
      { name: "Road Cup", url: "/RoadCup" },
      { name: "Road Cup Team", url: "/RoadCupTeam" },
      { name: "Cross", url: "/Cross" },
      { name: "Cross Individual Cup", url: "/CrossCup" },
      { name: "Cross Team Cup", url: "/CrossCupTeam" },
      { name: "Track Omnium", url: "/Track" },
      { name: "Result By Rider", url: "/ResultByRider" },
      { name: "MTB", url: "/MTB" },
    ],
  }),
};
</script>
