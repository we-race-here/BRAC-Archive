from django.db.models import Sum, Count
from django_filters.rest_framework import DjangoFilterBackend

from . import (models, serializers)
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
            if self.request.query_params.get('ordering', []) in '-view_result':
                query = query.annotate(count=Count('racer__id')).order_by('-count')
        except Exception as e: pass
        return query


class AcaEventViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaEventSerailizers
    queryset = models.AcaEvent.objects.all()
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaEvent._meta.fields]
    search_fields = ['name', 'description']
    http_method_names = ['get']

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

class AcaResultNoPageViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AcaResultEventSerailizers
    queryset = models.AcaResult.objects.all()
    pagination_class = None
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_fields = [field.name for field in models.AcaResult._meta.fields]
    search_fields = ['eventid__name']
    http_method_names = ['get']