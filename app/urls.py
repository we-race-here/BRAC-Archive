from django.conf.urls.static import static
from django.http import HttpResponse
from django.urls import path, include

from wrh_brac import settings
from . import (views, router)


urlpatterns = [
    # path('', views.HomeView.as_view()),
    path('', views.FrontView.as_view()),

    path('results/table', views.Result.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.router.urls