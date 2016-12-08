# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0004_auto_20161208_1120'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_by',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='message',
            name='time_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 8, 11, 27, 20, 223616, tzinfo=utc)),
        ),
    ]
