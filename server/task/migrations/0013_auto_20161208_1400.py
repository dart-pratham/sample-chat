# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0012_auto_20161208_1355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='time_to_fire',
            field=models.DateTimeField(null=True, blank=True),
        ),
    ]
