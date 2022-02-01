from datetime import datetime

from . import  models
from rest_framework import serializers
from drf_queryfields import QueryFieldsMixin


class AcaUserSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    view_result = serializers.SerializerMethodField(method_name="getResult", read_only=True)
    def getResult(self, value):
        try:
            return  models.AcaResult.objects.filter(racerid=value.id).count()
        except Exception as e:
            return 0
    class Meta:
        model  = models.AcaUser
        fields = '__all__'

# class TimestampField(serializers.Field):
#     def to_representation(self, value):
#         # epoch = datetime(value)
#         epoch = datetime.fromtimestamp(value).strftime('%Y-%m-%d')
#         return epoch

class AcaEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    eventdatetime_format =serializers.DateTimeField(source='eventdatetime', format="%d %B, %Y", required=False, read_only=True)
    promoter = AcaUserSerailizers()
    text = serializers.SerializerMethodField()
    value = serializers.SerializerMethodField()
    def get_value(self, value):
        return value.id
    def get_text(self, value):
        return value.eventdatetime.strftime('%d %B, %Y') +'-' +   value.name
    class Meta:
        model  = models.AcaEvent
        fields = '__all__'

class AcaRacegroupAcaEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):

    class Meta:
        model  = models.AcaRacegroup
        fields = '__all__'

class AcaRacegroupSerailizers(QueryFieldsMixin,serializers.ModelSerializer):

    class Meta:
        model  = models.AcaRacegroup
        fields = '__all__'

class AcaResultsetSerailizers(QueryFieldsMixin,serializers.ModelSerializer):

    class Meta:
        model  = models.AcaResultset
        fields = '__all__'

class AcaPointscompetitionSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    def to_representation(self, instance):
        response = super().to_representation(instance)
        try:
            response['lastrun'] = datetime.fromtimestamp(instance.lastrun).strftime('%Y-%m-%d %H:%M:%S')
        except Exception as e:pass
        return response
    class Meta:
        model  = models.AcaPointscompetition
        fields = '__all__'

class AcaPointscompetitionraceresultSerailizers(QueryFieldsMixin,serializers.ModelSerializer):

    class Meta:
        model  = models.AcaPointscompetitionraceresult
        fields = '__all__'

class AcaPointscompetitionresulterailizers(QueryFieldsMixin,serializers.ModelSerializer):
    racegroupname = serializers.SerializerMethodField(method_name="getracegroupname", read_only=True)
    def getracegroupname(self, value):
        try:
            return models.AcaPointscompetitionraceresult.objects.filter(racegroupid=value.racegroupid).first().racegroupname
        except Exception as e: print("Exception", str(e))
    class Meta:
        model  = models.AcaPointscompetitionresult
        fields = '__all__'


class AcaResultEventSerailizers(QueryFieldsMixin,serializers.ModelSerializer):
    racerid = AcaUserSerailizers()
    eventid = AcaEventSerailizers()
    eventracegroupid = AcaRacegroupSerailizers()
    class Meta:
        model  = models.AcaResult
        fields = '__all__'