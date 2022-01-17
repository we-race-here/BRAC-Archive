<template>
  <v-carousel cycle  :show-arrows="true" v-model="model">
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/cyclo_x_westminster_hinders.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/cyclo_x_westminster_murphy_1.jpg"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-carousel-item >
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img src="@/assets/states_murphy_4.jpg"></v-img>
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
      "@/assets/cyclo_x_westminster_hinders.jpg",
      ],
  }),
};
</script>