from django.conf.urls import url
from rest_framework.authtoken import views
from task.views import ShowAllMessageView , PostMessageView , FilterMessageView

app_name = 'task'

urlpatterns=[
    url(r'^get-token/$', views.obtain_auth_token , name='get_token'),
    url(r'^chat/$', ShowAllMessageView.as_view() , name='showAllMessage'),
    url(r'^filter/$', FilterMessageView.as_view() , name='filterMessage'),
    url(r'^post/$' , PostMessageView.as_view() , name='postMessage'),
]
