from django.db import models

# Create your models here.
class vehicules(models.Model):
    matricule=models.CharField( max_length=50)
    types=models.CharField(max_length=50)
    poid=models.CharField(max_length=50)
    chauffeur=models.CharField( max_length=50)
    vitesse=models.IntegerField()
    freinage=models.CharField( max_length=50)
    consommation=models.CharField( max_length=50)