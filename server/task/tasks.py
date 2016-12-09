from __future__ import absolute_import, unicode_literals
from celery import shared_task
from task import consumers
from task.models import Message , Notification
from django.contrib.auth.models import User


@shared_task
def readyTask(taskId):
    msg = Message.objects.get(pk=taskId)
    msg.ready=True
    msg.save()
    all_users = User.objects.all()
    for user in all_users:
        note = Notification()
        note.user = user
        note.message = msg
        note.save()
    consumers.notify()
