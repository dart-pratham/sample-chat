# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0006_auto_20161207_1755'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='ready_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 8, 13, 54, 12, 973927, tzinfo=utc)),
        ),
    ]
