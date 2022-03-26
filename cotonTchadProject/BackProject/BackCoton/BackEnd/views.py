from django.contrib.auth.models import User, Group
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode 
from rest_framework import viewsets , generics , status ,views , permissions
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from rest_framework.response import Response
import jwt
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util
from django.conf import settings
from rest_framework import generics, status, views, permissions
from rest_framework import permissions
from BackEnd.Serializers import ResetPasswordEmailRequestSerializer ,vehiculeSerializer,UserSerializer, GroupSerializer ,UtlisateursSerializer , ChauffeurSerializer ,UsinesSerializer
from BackEnd.Serializers import ChangePasswordSerializer , BorderauxdelivraisonSerializer ,transactionsSerializer
from .models import vehicules , utilisateurs , chauffeurs, usines , Borderauxdelivraison , transactions

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

class BorderauxdelivraisonViewSet(viewsets.ModelViewSet):
    queryset= Borderauxdelivraison.objects.all()
    serializer_class = BorderauxdelivraisonSerializer

class transactionsViewSet(viewsets.ModelViewSet):
    queryset= transactions.objects.all()
    serializer_class = transactionsSerializer



class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
      
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if utilisateurs.objects.filter(email=email).exists():
            utilisateur = utilisateurs.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(utilisateur.id))
            #token = PasswordResetTokenGenerator().make_token(utilisateur)
            current_site = get_current_site(
                request=request).domain
            """relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64}"""

            
            absurl = 'http://localhost:4200/resetpassword'
            email_body = 'Hello Dear user , \n Use link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': utilisateur.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)

    
class ChangePasswordView(generics.UpdateAPIView):
    """
    An endpoint for changing password.
    """
    serializer_class = ChangePasswordSerializer
    model = utilisateurs
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, queryset=None):
        obj = self.request.user
        return obj

    def update(self, request, *args, **kwargs):
        self.object = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Check old password
            if not self.object.check_password(serializer.data.get("old_password")):
                return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
            # set_password also hashes the password that the user will get
            self.object.set_password(serializer.data.get("new_password"))
            self.object.save()
            response = {
                'status': 'success',
                'code': status.HTTP_200_OK,
                'message': 'Password updated successfully',
                'data': []
            }

            return Response(response)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

