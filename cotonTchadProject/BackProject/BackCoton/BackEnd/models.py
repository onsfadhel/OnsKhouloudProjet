from django.db import models
import random

from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser
from twilio.rest import Client
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
    class Roles(models.TextChoices):
        RESPONSABLELOGISTIQUE = "gestionnaire logistique"
        ADMINISTRATEUR = "administrateur"
        COZOC= "cozoc"
        RESPONSABLEDEPRODUCTION = "responsable de production"
        RESPONSABLEFINANCIER = "responsable financier"
        RESPONSABLEDEPONTBASCULE = "responsable de pont bascule"
        RESPONSABLEDECGI = "responsable CGI"
    base_type = Roles.ADMINISTRATEUR
    nom=models.CharField(max_length=50)
    prenom=models.CharField(max_length=50)
    email=models.EmailField(max_length=254 , unique=True)
    password=models.CharField( max_length=255)
    phone= PhoneNumberField()
    username=None
    adresse=models.CharField( max_length=50)
    role=models.CharField( max_length=50, choices=Roles.choices, default=base_type)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class AdministarteurManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.ADMINISTRATEUR)

class Administrateur(utilisateurs):
    base_type = utilisateurs.Roles.ADMINISTRATEUR
    objects = AdministarteurManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class ResponsableLogistiqueManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.RESPONSABLELOGISTIQUE)

class ResponsableLogistique(utilisateurs):
    base_type = utilisateurs.Roles.RESPONSABLELOGISTIQUE
    objects = ResponsableLogistiqueManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class ResponsableFinancierManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.RESPONSABLEFINANCIER)

class ResponsableFinancier(utilisateurs):
    base_type = utilisateurs.Roles.RESPONSABLEFINANCIER
    objects = ResponsableFinancierManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class ResponsableDeProductionManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.RESPONSABLEDEPRODUCTION)

class ResponsableDeProduction(utilisateurs):
    base_type = utilisateurs.Roles.RESPONSABLEDEPRODUCTION
    objects = ResponsableDeProductionManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class ResponsableCGIManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.RESPONSABLEDECGI)

class ResponsableCGI(utilisateurs):
    base_type = utilisateurs.Roles.RESPONSABLEDECGI
    objects =ResponsableCGIManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class ResponsableDePontBaculeManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.RESPONSABLEDEPONTBASCULE)

class ResponsableDePontBacule(utilisateurs):
    base_type = utilisateurs.Roles.RESPONSABLEDEPONTBASCULE
    objects =ResponsableDePontBaculeManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"

class CozocManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(role=utilisateurs.Roles.COZOC)

class Cozoc(utilisateurs):
    base_type = utilisateurs.Roles.COZOC
    objects = CozocManager()

    class Meta:
        proxy = True

    def whisper(self):
        return "whisper"
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

class ticketdepese(models.Model):
    numeroticket= models.CharField(max_length=50)
    caisse=models.IntegerField()
    vehicule=models.ForeignKey("vehicules", on_delete=models.CASCADE ,blank=True, null=True )
    date=models.DateField(auto_now=False, auto_now_add=False)
    dateP1=models.DateField(auto_now=False, auto_now_add=False)
    dateP2=models.DateField(auto_now=False, auto_now_add=False)
    peseur=models.CharField(max_length=50)
    poidP1=models.FloatField()
    poidP2=models.FloatField()
    observation=models.CharField(max_length=100)

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
    image = models.ImageField(upload_to='pictures', height_field=None, width_field=None, max_length=None,blank=True, null=True )
    mois=models.IntegerField()

class stock(models.Model):
    image = models.ImageField(upload_to='pictures', height_field=None, width_field=None, max_length=None,blank=True, null=True )
    reference = models.CharField(max_length=50)
    categorie = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    entre= models.FloatField()
    sortie=models.FloatField()
    emplacement=models.ForeignKey("usines", on_delete=models.CASCADE ,blank=True, null=True)
    mois=models.IntegerField()

class stockcoton(models.Model):
    referencecoton=models.CharField(max_length=50)
    entre=models.FloatField()
    sortie=models.FloatField()
    av=models.CharField(max_length=50)
    usine=models.ForeignKey("usines", on_delete=models.CASCADE ,blank=True, null=True)
    mois=models.IntegerField()
class besoins(models.Model):
    code=models.CharField(max_length=50,null=True)
    code_AV=models.CharField(max_length=50,null=True)
    nom_artc=models.CharField(max_length=50)
    qte=models.FloatField()
    unite=models.CharField(max_length=50)
    date=models.DateField()
    echeance=models.DateField()
    prix=models.FloatField()
class facturecoton(models.Model):
    num=models.CharField(max_length=50)
    date=models.DateField()
    qte=models.FloatField()
    unite=models.CharField(max_length=10 , null=True)
    prixUnitaire=models.FloatField()
    prixTotal=models.FloatField()
    nom_AV=models.CharField(max_length=50)

class bordereauxlivraisonintrant(models.Model):
    num=models.CharField(max_length=50)
    date=models.DateField()
    designation=models.CharField(max_length=50)
    qte=models.FloatField()
    model_liv=models.CharField(max_length=50)
    model_paie=models.CharField(max_length=50)
    date_paie=models.DateField()
    date_liv=models.DateField()
class facturelivraisonintrant(models.Model):
    numfact=models.CharField(max_length=50)
    date=models.DateField(auto_now=False, auto_now_add=False)
    intrant=models.CharField(max_length=50)
    qte=models.FloatField()
    prixunitaire=models.FloatField()
    prixtotal=models.FloatField()
    modal_liv=models.CharField(max_length=50)
    echeance=models.DateField(auto_now=False, auto_now_add=False)
    observation=models.CharField( max_length=50)
class Code(models.Model):
    number=models.CharField( max_length=5 , blank=True)
    user =models.OneToOneField(utilisateurs,  on_delete=models.CASCADE)
    def __str__(self):
        return str(self.number)
    def __str__(self):
        phone=self.user.phone
        return str(phone)
    def save(self, *args, **kwargs):
        number_list = [x for x in range(10)]
        code_items = []
        for i in range(5):
            num = random.choice(number_list)
            code_items.append(num)
       
        code_string= "".join(str(item) for item in code_items)
       # insert message
        self.number= code_string


        super().save(*args, **kwargs)
    
class facturedeproduction(models.Model):
    numFacture=models.IntegerField(unique=True)
    produit=models.ForeignKey("produits", on_delete=models.CASCADE)
    PrixUnite=models.FloatField()
    Qte=models.IntegerField()
    client=models.ForeignKey("clients",on_delete=models.CASCADE)
    datedecreation=models.DateField( auto_now=False, auto_now_add=False,blank=True,null=True)
    total=models.IntegerField()