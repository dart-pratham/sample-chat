from task.models import Message , MyUser
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
#from rest_framework import generics
from task.settings import AUTHENTICATION_CLASSES , PERMISSION_CLASSES
#from rest_framework import status
#from rest_framework.renderers import JSONRenderer
#from rest_framework.parsers import JSONParser
from task import consumers , tasks , serializers

class ShowAllMessageView(APIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    def get(self , request , format=None):
        try:
            all_messages = Message.objects.all()
        except:
            all_messages = None
        serializer = serializers.MessageSerializer(all_messages,many=True)
        return Response(serializer.data)

class FilterMessageView(APIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES

    def get(self , request , format=None):
        try:
            all_users = User.objects.all()
        except:
            all_users = None
        serializer = serializers.UserSerializer(all_users , many=True)
        return Response(serializer.data)

    def post(self , request , format=None):
        messages_of = User.objects.get(username=request.data['username']).myuser
        req_messages = messages_of.message_set.all()
        serializer = serializers.MessageSerializer(req_messages , many=True)
        return Response(serializer.data)


class PostMessageView(APIView):
    authentication_classes = AUTHENTICATION_CLASSES
    permission_classes = PERMISSION_CLASSES
    def post(self,request,format=None):
#find shorter way to serialize current user
        serializer = serializers.MessageSerializer(data = request.data )
        if serializer.is_valid():
            message = serializer.save()
            message.message_by = request.user.myuser
            message.save()
            #tasks.readyTask.apply_async([message])
            consumers.new_message()

        else:
            return Response("cat")

        return Response(serializer.data)
        #tasks.readyTask.apply_async([1])
        #return Response(14)
