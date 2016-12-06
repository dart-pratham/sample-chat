from django.conf.urls import url
from task import views

app_name = 'task'

urlpatterns=[
    url(r'^$', views.ShowAllMessageView.as_view() , name='showAllMessage'),
    url(r'^post/' , views.PostMessageView.as_view() , name='postMessage'),
]
