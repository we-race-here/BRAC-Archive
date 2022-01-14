<template>
  <v-carousel cycle  :show-arrows="true" v-model="model">
    <v-carousel-item v-for="(color, i) in Images" :key="i">
      <v-sheet :color="color" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img :src="color"></v-img>
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
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mff-roka-0618-1-preview-maxwidth-3000-maxheight-3000-ppi-300-quality-90-1620433208.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1600:*",
      "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6bb87be9-d37c-4800-9fe9-e83e5ac46c8e.jpg?fit=scale-down&source=next&width=700"
      ],
  }),
};
</script>