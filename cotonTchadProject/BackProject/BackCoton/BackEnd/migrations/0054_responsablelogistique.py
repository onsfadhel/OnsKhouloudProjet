# Generated by Django 3.2.13 on 2022-05-20 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0053_administrateur'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResponsableLogistique',
            fields=[
            ],
            options={
                'proxy': True,
                'indexes': [],
                'constraints': [],
            },
            bases=('BackEnd.utilisateurs',),
        ),
    ]
