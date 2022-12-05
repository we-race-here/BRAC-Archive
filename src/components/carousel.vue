<template>
  <v-carousel v-if="Images.length >=1" cycle  :show-arrows="true" v-model="model">
    <v-carousel-item v-bind:key="image.id" v-for="image in Images">
      <v-sheet  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img :src="image.image"></v-img>
        </v-row>
      </v-sheet>
    </v-carousel-item>
    
  </v-carousel>
  
</template>

<script>
import CycAxios from "../respo";

export default {
  
  data: () => ({
    model: 0,
    Images: [
      // "@/assets/cyclo_x_westminster_hinders.jpg",
      ],
  }),
  mounted(){
    this.get_banner_images()
  },
  methods: {
    get_banner_images(){
      CycAxios.get("/BannerImage/").then((data) => {
        this.Images = data.data;
      });
    }
  }
};
</script>