from django.db import models
from django.contrib.auth.models import User

class MyUser(models.Model):
    user = models.OneToOneField(User )
    user_num = models.IntegerField(unique=True)

class Message(models.Model):
    text = models.CharField(max_length=100)
