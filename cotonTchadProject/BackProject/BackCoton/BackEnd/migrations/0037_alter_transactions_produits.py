# Generated by Django 4.0.3 on 2022-04-15 00:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0036_rename_produit_transactions_produits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transactions',
            name='produits',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='produits_id', to='BackEnd.produits'),
        ),
    ]
