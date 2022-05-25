from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Code, vehicules,facturelivraisonintrant, ticketdepese , bordereauxlivraisonintrant,  besoins, facturecoton, chauffeurs ,transactions , Cozoc, produits , clients ,stock, Administrateur, ResponsableLogistique, ResponsableCGI
from .models import utilisateurs , usines ,Borderauxdelivraison ,stockcoton, facturedeproduction, ResponsableFinancier, ResponsableDeProduction, ResponsableDePontBacule
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str , smart_bytes , DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_decode 
from django.contrib.sites.shortcuts import get_current_site
from rest_framework.exceptions import AuthenticationFailed
from .utils import Util 
from django.urls import reverse 

class vehiculeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = vehicules
        fields = ['id','matricule', 'types','marque', 'poid','vitesse','freinage','consommation']

class UtlisateursSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= utilisateurs
        fields = ['id','nom','prenom','email','password','phone','adresse','role']
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
       

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class administrateurSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= Administrateur
        fields = ['id','nom','prenom','email','password','phone','adresse','role']
class ResponsableLogistiqueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= ResponsableLogistique
        fields = ['id','nom','prenom','email','password','phone','adresse','role']
class ResponsableFinancierSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= ResponsableFinancier
        fields = ['id','nom','prenom','email','password','phone','adresse','role']
class ResponsableDeProductionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= ResponsableDeProduction
        fields = ['id','nom','prenom','email','password','phone','adresse','role']
class ResponsableCGISerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= ResponsableCGI
        fields = ['id','nom','prenom','email','password','phone','adresse','role']

class ResponsableDePontBaculeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= ResponsableDePontBacule
        fields = ['id','nom','prenom','email','password','phone','adresse','role']

class CozocSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= Cozoc
        fields = ['id','nom','prenom','email','password','phone','adresse','role']

class ChauffeurSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= chauffeurs
        fields= ['photo','id','nom','prenom','Birthday','phone','adresse','permis','salaire']
class facturecotonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = facturecoton
        fields = ['id','num', 'date', 'qte','unite', 'prixUnitaire','prixTotal','nom_AV']

class bordlivintrantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = bordereauxlivraisonintrant
        fields=['id','num','date','designation','qte','model_liv','model_paie','date_paie','date_liv']
class facturelivraisonintrantSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = facturelivraisonintrant
        fields=['id','numfact','date','intrant','qte','prixunitaire','prixtotal','modal_liv','echeance','observation']
class ProduitsApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = produits
        fields = ['id','reference','categorie','description','prix_de_vente','quantite','image','mois']
        def to_representation(self, instance):
            representation = dict()
            representation["id"] = instance.id
            representation["referene"] = instance.user.reference
            representation["categorie"] = instance.categorie
            representation["quantity"] = instance.quantity

class StockApiSerializer(serializers.ModelSerializer):
    emplacement_id=serializers.PrimaryKeyRelatedField(queryset=usines.objects.all(),source='emplacement',many=False)
    class Meta:
        model = stock
        fields = ['id','reference','categorie','description','entre','sortie','emplacement_id','image','mois']
        
class UsinesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta : 
        model= usines
        fields=['id','nom','age','typeEgreneuse','nbreEgreneuse','capacite','personnelPermanent','personnelSaisonnier','personnelOccasionnel']

class BorderauxdelivraisonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Borderauxdelivraison
        fields=['id','numerobordereau','date','lieu','modalitepaiement','modalitelivraison','datePaie','delailivraison','observation','tauxremise']
class ticketdepeseSerializer(serializers.HyperlinkedModelSerializer):
    vehicule_id=serializers.PrimaryKeyRelatedField(queryset=vehicules.objects.all(),source='vehicule',many=False)
    class Meta:
        model = ticketdepese
        fields=['id','numeroticket','caisse','vehicule_id','date','dateP1','dateP2','peseur','poidP1','poidP2','observation']
class transactionsSerializer(serializers.HyperlinkedModelSerializer):
    
    produit_id=serializers.PrimaryKeyRelatedField(queryset=produits.objects.all(),source='produit',many=False)
    chauffeur_id=serializers.PrimaryKeyRelatedField(queryset=chauffeurs.objects.all(),source='chauffeur',many=False)
    vehicule_id=serializers.PrimaryKeyRelatedField(queryset=vehicules.objects.all(),source='vehicule',many=False)
    class Meta:
        model= transactions
        fields=['id','transaction','produit_id','chauffeur_id','vehicule_id','datededepart','adressededepart','datearrive','adressededestination','notes']

class besoinSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = besoins
        fields = ['id','code', 'code_AV', 'nom_artc', 'qte','unite','date','echeance','prix']

class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    redirect_url = serializers.CharField(max_length=500, required=False)

    class Meta:
        fields = ['email']


class CodeSerializer(serializers.Serializer):
    number=serializers.CharField(label='Code',help_text="Enter SMs verification code")
    class Meta:
        model = Code
        fields=['number']
class stockSerializer(serializers.ModelSerializer):
    class Meta:
        model = stock
        fields = ['id','reference','categorie','description','entre','sortie','emplacement_id','image','mois']

class stockcotonSerializer(serializers.ModelSerializer):
    usine_id=serializers.PrimaryKeyRelatedField(queryset=usines.objects.all(),source='usine',many=False)
    class Meta:
        model=stockcoton
        fields=['id','referencecoton','entre','sortie','av','usine_id','mois']      

class TransactionsApiSerializer(serializers.ModelSerializer):
    class Meta:
        model=transactions
        fields=['id','transaction','produit_id','chauffeur_id','datededepart','adressededepart','datearrive','adressededestination','notes']
    
class VehiculesApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = vehicules
        fields = ['id','matricule', 'types','marque', 'poid','vitesse','freinage','consommation']

class ClientsApiSerializer(serializers.ModelSerializer):
    class Meta :
        model= clients
        fields=['id','nom','prenom','adresse','pays','phone','dateDeCommande']

class FacturesProductionApiSerializer(serializers.ModelSerializer):
    produit_id=serializers.PrimaryKeyRelatedField(queryset=produits.objects.all(),source='produit',many=False)
    client_id=serializers.PrimaryKeyRelatedField(queryset=clients.objects.all(),source='client',many=False)
    class Meta : 
        model = facturedeproduction
        fields=['id','numFacture','produit_id','PrixUnite','Qte','client_id','datedecreation','total']

class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        min_length=6, max_length=68, write_only=True)
    token = serializers.CharField(
        min_length=1, write_only=True)
    uidb64 = serializers.CharField(
        min_length=1, write_only=True)

    class Meta:
        fields = ['password', 'token', 'uidb64']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            token = attrs.get('token')
            uidb64 = attrs.get('uidb64')

            id = force_str(urlsafe_base64_decode(uidb64))
            user = utilisateurs.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                raise AuthenticationFailed('The reset link is invalid', 401)

            user.set_password(password)
            user.save()

            return (user)
        except Exception as e:
            raise AuthenticationFailed('The reset link is invalid', 401)
        return super().validate(attrs)




