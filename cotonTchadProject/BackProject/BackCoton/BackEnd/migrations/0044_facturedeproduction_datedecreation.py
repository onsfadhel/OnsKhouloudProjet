# Generated by Django 4.0.3 on 2022-04-17 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0043_transactions_vehicule'),
    ]

    operations = [
        migrations.AddField(
            model_name='facturedeproduction',
            name='datedecreation',
            field=models.DateField(blank=True, null=True),
        ),
    ]
