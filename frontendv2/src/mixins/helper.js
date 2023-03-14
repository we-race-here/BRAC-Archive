import CycAxios from '@/plugins/axios.js'

export const helpermixin = {
  data() {
    return {
      Years: [],
      SelectedYear: null,
      Events: [],
      EventLoader: false,
      EventSelected: null,
      EventResult: [],
      EventResultLoader: false,
      GroupSelcted: null,
      Groups: [],
      GroupLoader: false,
      summaryBy: 0,
      pagination_results: {},
      headers: [
        { text: "CATEGORY", value: "eventracegroupid.abbreviation" },
        { text: "STARTERS	", value: "STARTERS" },
        { text: "FINISHERS", value: "FINISHERS" },
        { text: "Details", value: "DEtails" },
      ],
      RaceByCate: [
        { text: "CATEGORY", value: "eventracegroupid.abbreviation" },
        { text: "STARTERS	", value: "STARTERS	" },
        { text: "FINISHERS", value: "FINISHERS" },
        { text: "Details", value: "DEtails" },

      ],
      RaceByCateWithGroup: [
        { text: "Place", value: "place" },
        { text: "TIME", value: "time" },
        { text: "CATEGORY", value: "eventracegroupid.mincategory" },
        { text: "FIRST NAME", value: "racerid.firstname" },
        { text: "Last NAME", value: "racerid.lastname" },
        // { text: "TEAM", value: "" },
        { text: "CITY", value: "racerid.city" },
        // { text: "DETAILS", value: "" },
        
      ],
      RaceByCity: [
        { text: "Home City", value: "CATEGORY" },
        { text: "FINISHERS	", value: "STARTERS	" },
      ],
      RaceByTeam: [
        { text: "TEAM", value: "CATEGORY" },
        { text: "FINISHERS", value: "STARTERS" },
      ],
      ResultSearch: "",
    };
  },

  watch: {
    summaryBy(value) {
      value;
      this.getHeaders();
    },
    EventSelected(value) {
      
      this.GroupLoader = true;
      CycAxios.get(`/AcaEvent/${value}/get_groups/?fields=id,name,starters`).then(
        (data) => {
            this.GroupSelcted = 0
          this.GroupLoader = false;
          this.Groups = data.data;
          this.Groups.push({ name: "Event Summary", id: -1 });
          this.GroupSelcted = -1;
          this.EventResult = [];
          this.EventResult = { results: this.Groups };
        }
      );
    },
    GroupSelcted(value) {
      
      this.EventResult = [];
      if (value == -1) {
        console.log(value);
        this.EventResult = { results: this.Groups };
        this.headers = [
          { text: "CATEGORY", value: "name" },
          { text: "STARTERS	", value: "starters" },
          { text: "FINISHERS", value: "starters" },
        ];
      }
      else{
        this.EventResultLoader = true;
        CycAxios.get("/AcaResultNoPage/?resultsetid="+value).then(
            (data) => {
              this.EventResultLoader = false;
              this.EventResult = {results: data.data};
              this.headers= this.RaceByCateWithGroup
            }
          );  
      }
    },
    SelectedYear(value) {
      this.EventLoader = true;
      CycAxios.get("/AcaEventNoPage/?eventdatetime__year=" + value+"&fields=id,name,eventdatetime_format,eventcity").then(
        (data) => {
          this.EventLoader = false;
          this.Events = data.data;
        }
      );
    },
  },
  methods: {
    getHeaders() {
      if (this.summaryBy == 0) {
        this.headers = this.RaceByCate;
      } else if (this.summaryBy == 1) {
        this.headers = this.RaceByCity;
      } else if (this.summaryBy == 2) {
        this.headers = this.RaceByTeam;
      }
    },
    getYear() {
      CycAxios.get("/AcaEvent/get_years/").then((data) => {
        this.Years = data.data;
      });
    },
  },
};
