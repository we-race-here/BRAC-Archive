from rest_framework import routers
from  . import viewset
router = routers.SimpleRouter()

router.register('AcaUser', viewset.AcaUserViewSet)
router.register('AcaEvent', viewset.AcaEventViewSet)
router.register('AcaEventNoPage', viewset.AcaEventViewSetNopage)
router.register('AcaResultset', viewset.AcaResultsetViewSet)
router.register('AcaRacegroup', viewset.AcaRacegroupViewSet)
router.register('AcaResult', viewset.AcaResultViewSet)
router.register('AcaResultNoPage', viewset.AcaResultNoPageViewSet)
router.register('AcaPointscompetition', viewset.AcaPointscompetitionViewSet)
router.register('AcaPointscompetitionraceresult', viewset.AcaPointscompetitionraceresultViewSet)
router.register('AcaPointscompetitionresult', viewset.AcaPointscompetitionresultViewSet)
router.register('BannerImage', viewset.HomeBannerImageiewSet)
