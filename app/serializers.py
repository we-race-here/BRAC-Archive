from datetime import datetime

from . import  models
from rest_framework import serializers
from drf_queryfields import QueryFieldsMixin


class AcaUserSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    class Meta:
        model  = models.AcaUser
        fields = '__all__'

class AcaEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['eventdate'] = datetime.fromtimestamp(instance.eventdate).strftime('%Y-%m-%d %I:%M %p')
        return response
    class Meta:
        model  = models.AcaEvent
        fields = '__all__'

class AcaRacegroupAcaEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):

    class Meta:
        model  = models.AcaRacegroup
        fields = '__all__'

class AcaResultEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    racerid = AcaUserSerailizers()
    eventid = AcaEventSerailizers()
    class Meta:
        model  = models.AcaResult
        fields = '__all__'