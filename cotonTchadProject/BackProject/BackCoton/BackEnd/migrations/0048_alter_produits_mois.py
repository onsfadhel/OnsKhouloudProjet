# Generated by Django 3.2.13 on 2022-05-09 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0047_auto_20220429_0202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produits',
            name='mois',
            field=models.IntegerField(),
        ),
    ]
