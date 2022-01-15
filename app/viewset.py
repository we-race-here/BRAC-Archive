from datetime import datetime

from django.db.models import Sum, Count
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework.response import Response

from . import (models, serializers, Customfilters)
from rest_framework import viewsets, mixins, filters


class AcaUserViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaUserSerailizers
    queryset = models.AcaUser.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaUser._meta.fields]
    search_fields = ['firstname', 'lastname']
    http_method_names = ['get']

    def get_queryset(self):
        query = super().get_queryset()
        try:
            if self.request.query_params.get('ordering', []) in 'view_result':
                query = query.annotate(count=Count('racer__id')).order_by('count')
            elif self.request.query_params.get('ordering', []) in '-view_result':
                query = query.annotate(count=Count('racer__id')).order_by('-count')
        except Exception as e: print("Exception", str(e))
        return query

class AcaResultsetViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaResultsetSerailizers
    queryset = models.AcaResultset.objects.all()

class AcaPointscompetitionViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaPointscompetitionSerailizers
    queryset = models.AcaPointscompetition.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaPointscompetition._meta.fields]
    pagination_class = None

class AcaPointscompetitionraceresultViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaPointscompetitionraceresultSerailizers
    queryset = models.AcaPointscompetitionraceresult.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaPointscompetitionraceresult._meta.fields]
    pagination_class = None

class AcaPointscompetitionresultViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaPointscompetitionresulterailizers
    queryset = models.AcaPointscompetitionresult.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaPointscompetitionresult._meta.fields]
    pagination_class = None

class AcaEventViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaEventSerailizers
    queryset = models.AcaEvent.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaEvent._meta.fields]
    search_fields = ['name', 'description']
    http_method_names = ['get']
    filterset_class = Customfilters.EventFilter

    @action(detail=False, methods=['get'])
    def get_years(self, request):
        years = set([i.year for i in models.AcaEvent.objects.filter().order_by('-eventdatetime').values_list('eventdatetime', flat=True)])
        return Response(sorted(years))

    @action(detail=True, methods=['get'])
    def get_groups(self, request,pk):
        return Response(serializers.AcaResultsetSerailizers(self.get_object().resultset.all(), many=True,context = {'request':request}).data)

class AcaEventViewSetNopage(viewsets.ModelViewSet):
    serializer_class = serializers.AcaEventSerailizers
    queryset = models.AcaEvent.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaEvent._meta.fields]
    pagination_class = None
    search_fields = ['name', 'description']
    http_method_names = ['get']
    filterset_class = Customfilters.EventFilter

    @action(detail=False, methods=['get'])
    def get_years(self, request):
        years = set([i.year for i in models.AcaEvent.objects.filter().order_by('-eventdatetime').values_list('eventdatetime', flat=True)])
        return Response(sorted(years))

class AcaRacegroupViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaRacegroupAcaEventSerailizers
    queryset = models.AcaRacegroup.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaRacegroup._meta.fields]
    search_fields = ['name', 'abbreviation']
    http_method_names = ['get']

class AcaResultViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaResultEventSerailizers
    queryset = models.AcaResult.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaResult._meta.fields]
    search_fields = ['eventid__name']
    http_method_names = ['get']
    filterset_class = Customfilters.AcaResultFilter

class AcaResultNoPageViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaResultEventSerailizers
    queryset = models.AcaResult.objects.all()
    pagination_class = None
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaResult._meta.fields]
    search_fields = ['eventid__name']
    http_method_names = ['get']

    @action(detail=False, methods=['get'])
    def summary_by_racegroup(self, request):
        # return Response(serializers.AcaResultsetSerailizers(self.get_object().resultset.all(), many=True,
        #                                                     context={'request': request}).data)
        return Response([])