# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0005_message_ready_to_fire'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='ready_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 7, 17, 55, 50, 269341, tzinfo=utc)),
        ),
    ]
