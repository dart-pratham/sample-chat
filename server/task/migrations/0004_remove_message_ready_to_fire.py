# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_auto_20161207_1552'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='ready_to_fire',
        ),
    ]
