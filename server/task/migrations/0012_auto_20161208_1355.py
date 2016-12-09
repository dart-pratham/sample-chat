# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0011_auto_20161208_1342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_by',
            field=models.ForeignKey(blank=True, to='task.MyUser', null=True),
        ),
    ]
