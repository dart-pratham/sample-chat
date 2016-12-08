from task.models import Message
from task.serializers import MessageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from task.settings import AUTHENTICATION_CLASSES , PERMISSION_CLASSES
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from task.consumers import caller
from task import tasks

class ShowAllMessageView(APIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    def get(self , request , format=None):
        try:
            all_messages = Message.objects.all()
        except:
            all_messages = None
        serializer = MessageSerializer(all_messages,many=True)
        return Response(serializer.data)


class PostMessageView(APIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    def post(self,request,format=None):

        serializer = MessageSerializer(data = request.data)
        if serializer.is_valid():
            message=serializer.save()
            tasks.readyTask.apply_async([message.pk])
            caller()
        #return Response(serializer.data)
        #tasks.readyTask.apply_async([1])
        return Response(14)
