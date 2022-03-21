from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from BackEnd.Serializers import vehiculeSerializer,UserSerializer, GroupSerializer ,UtlisateursSerializer , ChauffeurSerializer ,UsinesSerializer
from .models import vehicules , utilisateurs , chauffeurs, usines

class vehiculeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = vehicules.objects.all()
    serializer_class = vehiculeSerializer
    


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UtilisateursViewSet(viewsets.ModelViewSet):
    queryset= utilisateurs.objects.all()
    serializer_class = UtlisateursSerializer

class ChauffeursViewSet(viewsets.ModelViewSet):
    queryset = chauffeurs.objects.all()
    serializer_class = ChauffeurSerializer

class UsinesViewSet(viewsets.ModelViewSet):
    queryset = usines.objects.all()
    serializer_class = UsinesSerializer