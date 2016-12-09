from rest_framework import serializers
from task.models import *
from django.contrib.auth.models import User

class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = ('text','time_to_fire','id')


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = ('message','id' , 'approve')
        depth=1


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','id')




"""
    message_by = serializers.SerializerMethodField('_user')

    def _user(self, obj):
        user = self.context['request'].user
        return user
"""
