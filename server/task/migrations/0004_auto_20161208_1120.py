# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('task', '0003_auto_20161208_1119'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='message_by',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True),
        ),
        migrations.AlterField(
            model_name='message',
            name='time_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 8, 11, 20, 13, 877426, tzinfo=utc)),
        ),
    ]
