# Generated by Django 4.0.3 on 2022-04-15 00:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0038_remove_transactions_produits_transactions_produit'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transactions',
            old_name='produit',
            new_name='produits',
        ),
    ]
