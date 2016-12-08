# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_auto_20161208_1039'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='message_by',
        ),
        migrations.AddField(
            model_name='message',
            name='time_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 8, 11, 19, 5, 687228, tzinfo=utc)),
        ),
    ]
