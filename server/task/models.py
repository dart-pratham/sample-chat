from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime

class MyUser(models.Model):
    user = models.OneToOneField(User )
    user_num = models.IntegerField(unique=True)

class Message(models.Model):
    text = models.CharField(max_length=100)
    ready_to_fire = models.DateTimeField(default = timezone.now())  
    ready = models.BooleanField(default=False)
