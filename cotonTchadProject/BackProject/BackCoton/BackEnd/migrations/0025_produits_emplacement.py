# Generated by Django 4.0.3 on 2022-04-09 23:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0024_alter_produits_quantite'),
    ]

    operations = [
        migrations.AddField(
            model_name='produits',
            name='emplacement',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='BackEnd.usines'),
        ),
    ]