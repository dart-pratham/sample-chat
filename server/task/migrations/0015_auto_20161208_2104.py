# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0014_notification'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notification',
            old_name='confirm',
            new_name='approve',
        ),
    ]
