from task.models import Message , MyUser , Notification
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from task.settings import AUTHENTICATION_CLASSES , PERMISSION_CLASSES
from task import consumers , tasks , serializers
from datetime import timedelta

class MessageShowView(generics.ListAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    queryset=Message.objects.all()
    serializer_class=serializers.MessageSerializer

class MessageCreateView(generics.CreateAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    serializer_class=serializers.MessageSerializer

    def perform_create(self, data):
        msg=data.save()
        tasks.readyTask.apply_async([msg.id], eta= msg.time_to_fire - timedelta(hours=5, minutes=30))
        consumers.new_message()

class NotificationShowView(generics.ListAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    # serializer_class=serializers.NotificationSerializer
    def get_serializer_class(self):
        serializer_class = serializers.NotificationSerializer
        serializer_class.Meta.fields = ('message','id' , 'approve')
        return serializer_class
    def get_queryset(self):
        user=self.request.user
        return Notification.objects.filter(user=user)

class NotificationConfirmView(generics.CreateAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    # serializer_class=serializers.NotificationSerializer
    def get_serializer_class(self):
        serializer_class = serializers.NotificationSerializer
        serializer_class.Meta.fields = ('id',)
        return serializer_class
    def perform_create(self, serializer):
        id=self.request.data['id']
        notif=Notification.objects.get(id=id)
        notif.approve=True
        notif.save()
        consumers.notify()

class FilterMessageView(generics.ListAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    queryset=User.objects.all()
    serializer_class=serializers.UserSerializer

class UserFilterView(generics.ListAPIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    serializer_class=serializers.MessageSerializer
    def get_queryset(self):
        user_id=self.kwargs['user_id']
        messages_of=User.objects.get(id=user_id)
        return Message.objects.filter(message_by=messages_of)
