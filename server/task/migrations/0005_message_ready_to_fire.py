# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0004_remove_message_ready_to_fire'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='ready_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 7, 17, 44, 6, 678109, tzinfo=utc)),
        ),
    ]
