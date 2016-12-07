from django.http import HttpResponse
from ws4redis.redis_store import RedisMessage
from ws4redis.publisher import RedisPublisher
from random import randint

def caller():
        random=randint(0,9999999999)
        welcome = RedisMessage(str(random))  # create a welcome message to be sent to everybody
        RedisPublisher(facility='chatchannel', broadcast=True).publish_message(welcome)
