# Generated by Django 3.2.13 on 2022-05-17 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0050_alter_produits_mois'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stock',
            name='mois',
            field=models.IntegerField(),
        ),
    ]
