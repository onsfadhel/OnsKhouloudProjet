# Generated by Django 4.0.3 on 2022-03-10 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0002_alter_vehicules_poid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Livre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=50)),
                ('auteur', models.CharField(max_length=50)),
            ],
        ),
    ]
