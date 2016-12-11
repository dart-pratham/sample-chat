from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime
from task import consumers

class MyUser(models.Model):
    user = models.OneToOneField(User )
    user_num = models.IntegerField(unique=True)

class Message(models.Model):
    text = models.CharField(max_length=100)
    message_by = models.ForeignKey(User)
    time_to_fire = models.DateTimeField(null=True , blank=True)
    ready = models.BooleanField(default=False)

    # def save(self,*args, **kwargs):
    #     super(Message, self).save()
    #     from task.tasks import readyTask
    #     tasks.readyTask.apply_async([self] , eta =self.time_to_fire )
    #     consumers.new_message()
class Notification(models.Model):
    user = models.ForeignKey(User)
    message = models.ForeignKey(Message)
    approve = models.BooleanField(default=False)
