<template>
  <v-carousel cycle  :show-arrows="true" v-model="model">
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/littleton_murphy_banner.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/niwot_muncy.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/tc_green_mountain_1_banner.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/littleton_curry_banner_2.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/littleton_curry_banner_1.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/littleton_curry_banner_3.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  
</template>

<script>
export default {
  data: () => ({
    model: 0,
    Images: [
      // "@/assets/cyclo_x_westminster_hinders.jpg",
      ],
  }),
};
</script>