from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class vehicules(models.Model):
    matricule=models.CharField( max_length=50)
    types=models.CharField(max_length=50)
    marque=models.CharField(max_length=100,blank=True, null=True)
    poid=models.CharField(max_length=50)
    vitesse=models.IntegerField()
    freinage=models.CharField( max_length=50)
    consommation=models.CharField( max_length=50)

class utilisateurs(AbstractBaseUser):
    nom=models.CharField(max_length=50)
    prenom=models.CharField(max_length=50)
    email=models.EmailField(max_length=254 , unique=True)
    password=models.CharField( max_length=255)
    phone= PhoneNumberField()
    username=None
    adresse=models.CharField( max_length=50)
    role=models.CharField( max_length=50)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class chauffeurs(models.Model):
    photo=models.ImageField( upload_to='pictures', height_field=None, width_field=None, max_length=100,blank=True, null=True )
    nom=models.CharField(max_length=50)
    prenom= models.CharField(max_length=50)
    Birthday= models.DateField(auto_now=False, auto_now_add=False)
    phone= PhoneNumberField()
    adresse=models.CharField(max_length=50)
    permis=models.CharField( max_length=50,blank=True, null=True )
    salaire=models.FloatField(blank=True, null=True )
    def __str__(self):
        return self.nom

class usines(models.Model):
    nom=models.CharField(max_length=50)
    age=models.DateField(auto_now=False, auto_now_add=False)
    typeEgreneuse=models.CharField( max_length=50)
    nbreEgreneuse=models.IntegerField()
    capacite=models.FloatField()
    personnelPermanent=models.IntegerField()
    personnelSaisonnier=models.IntegerField()
    personnelOccasionnel=models.IntegerField()

class Borderauxdelivraison(models.Model):
    numerobordereau=models.IntegerField()
    date=models.DateField(auto_now=False, auto_now_add=False)
    lieu=models.CharField( max_length=50)
    modalitepaiement=models.CharField(max_length=50)
    modalitelivraison=models.CharField(max_length=50)
    datePaie=models.DateField(auto_now=False, auto_now_add=False)
    delailivraison=models.DateField(auto_now=False, auto_now_add=False)
    observation=models.CharField(max_length=50)
    tauxremise=models.FloatField()

class transactions(models.Model):
    transaction=models.CharField(max_length=50)
    produit=models.ForeignKey("produits", on_delete=models.CASCADE ,blank=True, null=True )
    chauffeur=models.ForeignKey("chauffeurs", on_delete=models.CASCADE ,blank=True, null=True )
    vehicule=models.ForeignKey("vehicules", on_delete=models.CASCADE ,blank=True, null=True )
    datededepart=models.DateField(auto_now=False, auto_now_add=False)
    adressededepart=models.CharField(max_length=50)
    datearrive=models.DateField(auto_now=False, auto_now_add=False)
    adressededestination=models.CharField(max_length=50)
    notes=models.CharField(max_length=50)



class clients(models.Model):
    nom=models.CharField(max_length=50)
    prenom=models.CharField(max_length=50)
    adresse=models.CharField(max_length=50)
    pays=models.CharField(max_length=50)
    phone=PhoneNumberField()
    dateDeCommande=models.DateField(auto_now=False, auto_now_add=False)
class produits(models.Model):
    reference = models.CharField(max_length=50)
    categorie = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    prix_de_vente = models.FloatField()
    quantite = models.CharField(max_length=50)
    emplacement=models.ForeignKey("usines", on_delete=models.CASCADE ,blank=True, null=True )
    image = models.ImageField(upload_to='pictures', height_field=None, width_field=None, max_length=None,blank=True, null=True )

class facturedeproduction(models.Model):
    numFacture=models.IntegerField(unique=True)
    produit=models.ForeignKey("produits", on_delete=models.CASCADE)
    PrixUnite=models.FloatField()
    Qte=models.IntegerField()
    client=models.ForeignKey("clients",on_delete=models.CASCADE)
    datedecreation=models.DateField( auto_now=False, auto_now_add=False,blank=True,null=True)
    total=models.IntegerField()