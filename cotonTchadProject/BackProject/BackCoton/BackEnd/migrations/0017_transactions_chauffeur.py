# Generated by Django 4.0.3 on 2022-03-26 15:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0016_remove_transactions_chauffeur'),
    ]

    operations = [
        migrations.AddField(
            model_name='transactions',
            name='chauffeur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='BackEnd.chauffeurs'),
        ),
    ]