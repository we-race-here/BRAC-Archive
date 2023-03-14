<template>
<div>
  <div class="text-center">
    <v-progress-circular
    v-if="loader"
      indeterminate
      color="primary"
    ></v-progress-circular>
    </div>

    <v-carousel v-if="Images.length >=1"  cycle :show-arrows="true">
      <v-carousel-item v-bind:key="image.id" v-for="image in Images">
        <v-sheet v-if="image" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            {{image.id}}
            <v-img :src="image.filelocation"></v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
  </v-carousel>

  <div class="mt-2" v-if="informations.length >= 1">
    <h3 style="border-left: 5px solid red" class="pl-3">
              Information
             
            </h3>
      <div class="ma-2">
          <p v-bind:key="information.id" v-for="information in informations" >
            {{information.text}}
          </p>
      </div>
  </div>
  
</div>
  
</template>

<script>
import CycAxios from '@/plugins/axios.js'
export default {
  data: () => ({
    model: 0,
    loader: false,
    Images: [
      // "@/assets/cyclo_x_westminster_hinders.jpg",
    ],
    informations: []
  }),
  mounted() {
    this.get_banner_images()
    this.get_home_information()
  },
  methods: {
    get_banner_images() {
      this.loader = true
      CycAxios.get('/BannerImage/')
        .then(data => {
          this.Images = data.data
          this.loader = false
        })
        .catch(err => {
          this.loader = false
        })
    },
    get_home_information() {
      CycAxios.get('/information/')
        .then(data => {
          this.informations = data.data
        })
        .catch(err => {
        })
    },
  },
}
</script>

<style>
</style>

