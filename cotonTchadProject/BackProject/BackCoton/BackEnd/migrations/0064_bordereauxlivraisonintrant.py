# Generated by Django 3.2.13 on 2022-05-24 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0063_facturecoton'),
    ]

    operations = [
        migrations.CreateModel(
            name='bordereauxlivraisonintrant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('designation', models.CharField(max_length=50)),
                ('qte', models.FloatField()),
                ('model_liv', models.CharField(max_length=50)),
                ('model_paie', models.CharField(max_length=50)),
                ('date_paie', models.DateField()),
                ('date_liv', models.DateField()),
            ],
        ),
    ]