# Generated by Django 3.2.13 on 2022-05-20 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0055_responsablefinancier'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResponsableDeProduction',
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
