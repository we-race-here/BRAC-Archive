<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12">
        <v-card outlined >
          <v-card-title> </v-card-title>
          <v-card-text>
            <!-- <p class="text-h5">Road Cup</p> -->
            <div >
              <h3 v-if="RoadCupSelected" style="border-left: 5px solid #1890ff" class="pl-3">
                {{ RoadCupSelected.description }}
              </h3>
              <v-row>
                <v-col class="mt-4 ml-4" cols="12" sm="4"
                  ><v-autocomplete
                    v-model="RoadCupSelected"
                    v-if="RoadCupSelected"
                    dense
                    :hint="`${RoadCupSelected.lastrun ? `Latest refresh to ${RoadCupSelected.description} on ${RoadCupSelected.lastrun}` : ''}`"
                    persistent-hint
                    label="Road Cup"
                    :items="RoadCup"
                    return-object
                    item-text="description"
                  ></v-autocomplete
                ></v-col>
                <v-col class="mt-4 ml-4" cols="12" sm="4"
                  ><v-autocomplete
                  :loading="RoadCupCategoryLoader"
                    dense
                    v-model="RoadCupCategorySelector"
                    label="Select a Category"
                    :items="RoadCupCategory"
                    return-object
                    item-text="racegroupname"
                  ></v-autocomplete
                ></v-col>
                <v-col cols="12" sm="1">
                  <v-btn small target="__blank__" :href="`/AcaPointscompetitionresult/?ordering=place&pointscompetitionid=${RoadCupCategorySelector.pointscompetitionid}&racegroupid=${RoadCupCategorySelector.racegroupid}&export=csv&type=roadcup`" v-if="RoadCupCategorySelector">Export CSV</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-data-table
                  :loading="ReadCupResultLoader"
                  :items="ReadCupResult"
                  :headers="[
                  {text: 'Place', value: 'place'},
                  {text: 'POINTS', value: 'points'},
                  {text: 'FIRST NAME', value: 'firstname'},
                  {text: 'LAST NAME', value: 'lastname'},
                  {text: 'USAC #', value: 'usac'},
                  {text: 'CURRENT CAT', value: 'currentcat'},
                  {text: 'RACING AGE', value: 'racingage'},
                  ]"
                  >

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
import CycAxios from '@/plugins/axios.js'

export default {
  data() {
    return {
      RoadCup: [],
      RoadCupSelected: null,
      RoadCupCategory: [],
      RoadCupCategorySelector: null,
      RoadCupCategoryLoader: false,
      ReadCupResult: [],
      ReadCupResultLoader: false
    };
  },
  mounted() {
    this.getCupDetails();
  },
  watch:{
    RoadCupSelected(value){
      value
      this.getCategory()
    },
    RoadCupCategorySelector(value){
      this.ReadCupResultLoader = true
      console.log("vaue", value)
      CycAxios.get(`/AcaPointscompetitionresult/?pointscompetitionid=${value.pointscompetitionid}&racegroupid=${value.racegroupid}&fields=place,points,firstname,lastname,usac,currentcat,racingage`).then((data) => {
        console.log(data);
        this.ReadCupResult = data.data;
        this.ReadCupResultLoader = false
      });
    }
  },
  methods: {
    getCupDetails() {
      CycAxios.get(`/AcaPointscompetition/?name=BCR`).then((data) => {
        console.log(data);
        this.RoadCup = data.data;
        this.RoadCupSelected = this.RoadCup[this.RoadCup.length - 1];
      });
    },
    getCategory() {
      this.RoadCupCategoryLoader =true
      CycAxios.get(`/AcaPointscompetitionraceresult/?pointscompetitionid=${this.RoadCupSelected.id}&fields=racegroupname,id,racegroupid,pointscompetitionid`).then((data) => {
        console.log(data);
        this.RoadCupCategory = data.data;
        this.RoadCupCategoryLoader = false
      });
    },
  },
};
</script>

<style>
</style>