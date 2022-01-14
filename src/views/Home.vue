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
        <v-card outlined>
          <v-card-title>UPCOMING RACES & EVENTS</v-card-title>
          <v-card-text>
            <calendar />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="1"></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card outlined color="rgb( 230, 230, 230 )">
          <v-card-title> </v-card-title>
          <v-card-text>
            <p class="text-h4 text-center">SPONSORS</p>
            <center>
              <v-img
                    width="100"
                    src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774"
                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  >
              </v-img>
             
            </center>

            <!-- <v-img
              width="100"
              src="https://media.istockphoto.com/vectors/rubber-stamp-with-sponsor-concept-vector-id995710774"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            ></v-img> -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import calendar from "../components/calendar.vue";

export default {
  name: "Home",

  components: {
    carousel,
    calendar,
  },
};
</script>
