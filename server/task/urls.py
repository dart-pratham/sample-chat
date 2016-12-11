from django.conf.urls import url
from rest_framework.authtoken import views
from task.views import MessageShowView , MessageCreateView, UserFilterView, FilterMessageView , NotificationShowView, NotificationConfirmView

app_name = 'task'

urlpatterns=[
    url(r'^get-token/$', views.obtain_auth_token , name='get_token'),
    url(r'^chat/$', MessageShowView.as_view() , name='showAllMessage'),
    url(r'^post/$' , MessageCreateView.as_view() , name='postMessage'),
    url(r'^filter/$', FilterMessageView.as_view() , name='filterMessage'),
    url(r'^filter/user/(?P<user_id>[0-9]+)/$', UserFilterView.as_view() , name='userfilterMessage'),
    url(r'^get-notif/$' , NotificationShowView.as_view() , name='getNotify'),
    url(r'^confirm-notif/$' , NotificationConfirmView.as_view() , name='confirmNotify'),
]
