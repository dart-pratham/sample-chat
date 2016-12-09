from django.conf.urls import url
from rest_framework.authtoken import views
from task.views import ShowAllMessageView , PostMessageView , FilterMessageView , NotifyView

app_name = 'task'

urlpatterns=[

    url(r'^get-token/$', views.obtain_auth_token , name='get_token'),
    url(r'^chat/$', ShowAllMessageView.as_view() , name='showAllMessage'),
    url(r'^filter/user/(?P<num>[0-9]+)/$', FilterMessageView.as_view() , name='filterMessage'),
    url(r'^filter/$', FilterMessageView.as_view() , name='filterMessage'),
    url(r'^post/$' , PostMessageView.as_view() , name='postMessage'),
    url(r'^get-notif/$' , NotifyView.as_view() , name='getNotify'),

]
