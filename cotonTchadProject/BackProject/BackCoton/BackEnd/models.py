from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.
class vehicules(models.Model):
    matricule=models.CharField( max_length=50)
    types=models.CharField(max_length=50)
    poid=models.CharField(max_length=50)
    chauffeur=models.CharField( max_length=50)
    vitesse=models.IntegerField()
    freinage=models.CharField( max_length=50)
    consommation=models.CharField( max_length=50)

class utilisateurs(models.Model):
    nom=models.CharField(max_length=50)
    prenom=models.CharField(max_length=50)
    email=models.EmailField(max_length=254)
    password=models.CharField( max_length=50)
    téléphone= PhoneNumberField()
    adresse=models.CharField( max_length=50)
    role=models.CharField( max_length=50)

class chauffeurs(models.Model):
    photo=models.ImageField( upload_to='pictures', height_field=None, width_field=None, max_length=100,blank=True, null=True )
    nom=models.CharField(max_length=50)
    prenom= models.CharField(max_length=50)
    Birthday= models.DateField(auto_now=False, auto_now_add=False)
    phone= PhoneNumberField()
    adresse=models.CharField(max_length=50)
    permis=models.CharField( max_length=50,blank=True, null=True )
    salaire=models.FloatField(blank=True, null=True )