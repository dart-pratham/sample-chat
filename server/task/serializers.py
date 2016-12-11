from rest_framework import serializers
from task.models import *
from django.contrib.auth.models import User

# class DynamicFieldsModelSerializer(serializers.ModelSerializer):
#     """
#     A ModelSerializer that takes an additional `fields` argument that
#     controls which fields should be displayed.
#     """
#
#     def __init__(self, *args, **kwargs):
#         # Don't pass the 'fields' arg up to the superclass
#         fields = kwargs.pop('fields', None)
#
#         # Instantiate the superclass normally
#         super(DynamicFieldsModelSerializer, self).__init__(*args, **kwargs)
#
#         if fields is not None:
#             # Drop any fields that are not specified in the `fields` argument.
#             allowed = set(fields)
#             existing = set(self.fields.keys())
#             for field_name in existing - allowed:
#                 self.fields.pop(field_name)

class MessageSerializer(serializers.ModelSerializer):
    message_by=serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    class Meta:
        model = Message
        fields = ('__all__')


class NotificationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notification
        fields = ('message','id' , 'approve')
        depth=1

# class NotificationSerializer2(serializers.ModelSerializer):
#
#     class Meta:
#         model = Notification
#         fields = ('id')
#         depth=1


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','id')
