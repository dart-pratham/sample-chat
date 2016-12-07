from django.contrib import admin
from task.models import Message , MyUser

class MessageAdmin(admin.ModelAdmin):
    pass
admin.site.register(Message, MessageAdmin)

class MyUserAdmin(admin.ModelAdmin):
    pass
admin.site.register(MyUser, MyUserAdmin)
