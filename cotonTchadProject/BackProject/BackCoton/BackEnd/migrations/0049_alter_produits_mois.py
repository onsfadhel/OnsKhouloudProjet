# Generated by Django 3.2.13 on 2022-05-09 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0048_alter_produits_mois'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produits',
            name='mois',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
