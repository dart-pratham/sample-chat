# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0008_auto_20161208_1129'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_by',
            field=models.ForeignKey(to='task.MyUser', null=True),
        ),
        migrations.AlterField(
            model_name='message',
            name='time_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 8, 11, 42, 36, 607065, tzinfo=utc)),
        ),
    ]
