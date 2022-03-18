from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import vehicules , chauffeurs
from .models import utilisateurs
class vehiculeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = vehicules
        fields = ['id','matricule', 'types', 'poid', 'chauffeur','vitesse','freinage','consommation']
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class UtlisateursSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= utilisateurs
        fields = ['id','nom','prenom','email','password','téléphone','adresse','role']

class ChauffeurSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= chauffeurs
        fields= ['photo','id','nom','prenom','Birthday','phone','adresse','permis','salaire']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']