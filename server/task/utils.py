from rest_framework.response import Response

def give_all(qset , serializer):
    serial = serializer(qset , many=True)
    return Response(serial.data)
