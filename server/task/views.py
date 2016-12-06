from task.models import Message
from task.serializers import MessageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics


class ShowAllMessageView(APIView):
    def get(self , request , format=None):
        try:
            all_messages = Message.objects.all()
        except:
            all_messages = None
        serializer = MessageSerializer(all_messages,many=True)
        return Response(serializer.data)


class PostMessageView(APIView):
    def post(self,request,format=None):
        serializer = MessageSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
