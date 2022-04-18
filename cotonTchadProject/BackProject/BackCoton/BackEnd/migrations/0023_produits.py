# Generated by Django 4.0.3 on 2022-04-09 21:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackEnd', '0022_delete_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='produits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reference', models.CharField(max_length=50)),
                ('categorie', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=50)),
                ('prix_de_vente', models.FloatField()),
                ('quantite', models.IntegerField()),
                ('image', models.ImageField(upload_to='pictures')),
            ],
        ),
    ]