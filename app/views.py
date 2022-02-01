from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework.response import Response
from rest_framework.views import APIView

from . import models, serializers

class HomeView(TemplateView):
    template_name = 'Data.html'

class FrontView(TemplateView):
    template_name = 'index.html'


class Result(APIView):
    def get(self, request):
        if not request.GET._mutable:
            request.GET._mutable = True
        event = []
        if request.GET.get('action') == 'getEvents':
            request.GET['fields'] = 'text,value'
            event = serializers.AcaEventSerailizers(models.AcaEvent.objects.filter(
                eventdatetime__year=request.GET.get('year')),
                many=True,context={'request':request}).data
        elif request.GET.get('action') == 'getResultSets' and request.GET.get('eventId'):
            request.GET['fields'] = 'text,value'
            event_obj = models.AcaEvent.objects.get(id=request.GET.get('eventId'))
            event = {i.id : i.name  for i in event_obj.resultset.all()}
            event['all'] ="All Groups"
            event['sum'] ="Event Summary"
        elif request.GET.get('resultsetId') == 'sum' and request.GET.get('action', None) == None:
            event_obj = models.AcaEvent.objects.get(id=request.GET.get('eventId'))
            return render(request, 'resultset.html', context={'event' : event_obj.resultset.all()})
        elif request.GET.get('resultsetId') not in ['sum', 'all'] and request.GET.get('action', None) == None:
            event_obj = models.AcaEvent.objects.get(id=request.GET.get('eventId'))
            print(models.AcaResult.objects.filter(resultsetid=request.GET.get('resultsetId')))
            return render(request, 'indivudualResultSet.html', context={
                'event_obj' : event_obj,
                'resultset' : models.AcaResult.objects.filter(resultsetid=request.GET.get('resultsetId')).order_by('place')
            })

        return Response(event)