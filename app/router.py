from rest_framework import routers
from  . import viewset
router = routers.SimpleRouter()

router.register('AcaUser', viewset.AcaUserViewSet)
router.register('AcaEvent', viewset.AcaEventViewSet)
router.register('AcaRacegroup', viewset.AcaRacegroupViewSet)
router.register('AcaResult', viewset.AcaResultViewSet)
router.register('AcaResultNoPage', viewset.AcaResultNoPageViewSet)