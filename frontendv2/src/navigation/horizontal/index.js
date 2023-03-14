import { mdiFileOutline, mdiHomeOutline, mdiClipboardCheck } from '@mdi/js'

export default [
  {
    title: 'Home',
    icon: mdiHomeOutline,
    to: 'home',
  },
  {
    title: 'Results',
    icon: '',
    to: 'results',
    children: [
      { title: "Road", to: "Road" },
      { title: "Road Cup", to: "RoadCup" },
      { title: "Road Cup Team", to: "RoadCupTeam" },
      { title: "Cross", to: "Cross" },
      { title: "Cross Individual Cup", to: "CrossCup" },
      { title: "Cross Team Cup", to: "CrossCupTeam" },
      { title: "Track Omnium", to: "Track" },
      { title: "Result By Rider", to: "ResultByRider" },
      { title: "MTB", to: "MTB" },
    ]
  }
]
