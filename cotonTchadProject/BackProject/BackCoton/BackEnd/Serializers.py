from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import vehicules

class vehiculeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = vehicules
        fields = ['id','matricule', 'types', 'poid', 'chauffeur','vitesse','freinage','consommation']
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']