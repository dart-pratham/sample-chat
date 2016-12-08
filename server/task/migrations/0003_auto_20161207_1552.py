# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0002_auto_20161207_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='ready_to_fire',
            field=models.DateTimeField(default=datetime.datetime(2016, 12, 7, 15, 52, 55, 242928)),
        ),
    ]
