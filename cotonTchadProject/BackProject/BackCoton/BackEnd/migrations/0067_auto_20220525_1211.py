# Generated by Django 3.2.13 on 2022-05-25 11:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0066_stockcoton'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stockcoton',
            name='usine',
        ),
        migrations.AddField(
            model_name='stockcoton',
            name='emplacement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='BackEnd.usines'),
        ),
    ]
