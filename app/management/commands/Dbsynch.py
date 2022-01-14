from datetime import datetime

from django.core.management import BaseCommand
from app import models

class Command(BaseCommand):

    def handle(self, *args, **options):
        for i in models.AcaEvent.objects.all():
            i.eventdatetime = datetime.fromtimestamp(i.eventdate)
            i.save()
