from django.http import HttpResponse
from ws4redis.redis_store import RedisMessage
from ws4redis.publisher import RedisPublisher
from random import randint

def ws_basic(channel , message):
    msg = RedisMessage(str(message))
    RedisPublisher(facility=channel, broadcast=True).publish_message(msg)

def new_message():
    random=randint(0,9999999999)
    ws_basic('chatchannel', random)

def notify():
    random=randint(0,9999999999)
    ws_basic('notifychannel',random)
