from django.http import HttpResponse
from django.urls import path, include
from . import (views, router)


urlpatterns = [
    path('', views.HomeView.as_view()),
    path('coloradocycling', views.FrontView.as_view()),
]

urlpatterns += router.router.urls