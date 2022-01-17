from . import models
from django_filters import rest_framework as filters


class EventFilter(filters.FilterSet):
    eventdatetime__year = filters.CharFilter(field_name='eventdatetime__year')
    eventdatetime__month = filters.CharFilter(field_name='eventdatetime__month')
    class Meta:
        model = models.AcaEvent
        fields = [field.name for field in models.AcaEvent._meta.fields] \
                 +  ['eventdatetime__year','eventdatetime__month']

class AcaResultFilter(filters.FilterSet):
    eventid__eventdatetime__year = filters.CharFilter(field_name='eventid__eventdatetime__year')
    class Meta:
        model = models.AcaResult
        fields = [field.name for field in models.AcaResult._meta.fields] \
                 +  ['eventid__eventdatetime__year']