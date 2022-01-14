from rest_framework import routers
from  . import viewset
router = routers.SimpleRouter()

router.register('AcaUser', viewset.AcaUserViewSet)
router.register('AcaEventNoPage', viewset.AcaEventViewSetNopage)
router.register('AcaEvent', viewset.AcaEventViewSet)
router.register('AcaResultset', viewset.AcaResultsetViewSet)
router.register('AcaRacegroup', viewset.AcaRacegroupViewSet)
router.register('AcaResult', viewset.AcaResultViewSet)
router.register('AcaResultNoPage', viewset.AcaResultNoPageViewSet)