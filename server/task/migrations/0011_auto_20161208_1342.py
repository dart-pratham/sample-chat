# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0010_auto_20161208_1249'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_by',
            field=models.ForeignKey(to='task.MyUser'),
        ),
    ]
