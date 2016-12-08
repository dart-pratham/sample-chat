# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='ready_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 7, 14, 43, 11, 754478)),
        ),
    ]
