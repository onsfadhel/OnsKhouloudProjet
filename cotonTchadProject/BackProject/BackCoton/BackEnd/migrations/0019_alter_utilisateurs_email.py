# Generated by Django 4.0.3 on 2022-03-29 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0018_utilisateurs_last_login'),
    ]

    operations = [
        migrations.AlterField(
            model_name='utilisateurs',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
