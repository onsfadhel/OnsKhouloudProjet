# Generated by Django 3.2.13 on 2022-05-25 12:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0067_auto_20220525_1211'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stockcoton',
            old_name='emplacement',
            new_name='usine',
        ),
    ]
