# Generated by Django 4.0.3 on 2022-04-13 01:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0031_rename_codeproduit_transactions_codeproduit_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transactions',
            old_name='codeproduit_id',
            new_name='codeproduit',
        ),
    ]
