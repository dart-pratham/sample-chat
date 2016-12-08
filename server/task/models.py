from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime

class MyUser(models.Model):
    user = models.OneToOneField(User )
    user_num = models.IntegerField(unique=True)

class Message(models.Model):
    text = models.CharField(max_length=100)
    message_by = models.ForeignKey(MyUser , null=True ,blank=True)
    time_to_fire = models.DateTimeField(null=True , blank=True)
    ready = models.BooleanField(default=False)

class Notification(model.Model):
    user = models.ForeignKey(User)
    message = models.ForeignKey(Message)
