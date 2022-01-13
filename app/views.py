from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from . import models, serializers

class HomeView(TemplateView):
    template_name = 'Data.html'

