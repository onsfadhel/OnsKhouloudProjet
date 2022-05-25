# Generated by Django 3.2.13 on 2022-05-20 18:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0060_cozoc'),
    ]

    operations = [
        migrations.CreateModel(
            name='ticketdepese',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroticket', models.CharField(max_length=50)),
                ('caisse', models.IntegerField()),
                ('date', models.DateField()),
                ('dateP1', models.DateField()),
                ('dateP2', models.DateField()),
                ('peseur', models.CharField(max_length=50)),
                ('poidP1', models.FloatField()),
                ('poidP2', models.FloatField()),
                ('observation', models.CharField(max_length=100)),
                ('vehicule', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='BackEnd.vehicules')),
            ],
        ),
    ]
