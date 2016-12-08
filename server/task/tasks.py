from __future__ import absolute_import, unicode_literals
from celery import shared_task
from task.models import Message

@shared_task
def readyTask(message):
    #print "parrot"
    message.ready = True
    message.save()
    #message.ready=True
    #message.save()
