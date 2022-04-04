from django.contrib.auth.models import User, Group
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode 
from rest_framework import viewsets , generics , status ,views , permissions
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
import jwt , datetime
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util
from django.conf import settings
from rest_framework import generics, status, views, permissions
from rest_framework import permissions
from BackEnd.Serializers import ResetPasswordEmailRequestSerializer ,vehiculeSerializer,UserSerializer, GroupSerializer ,UtlisateursSerializer , ChauffeurSerializer ,UsinesSerializer
from BackEnd.Serializers import SetNewPasswordSerializer , BorderauxdelivraisonSerializer ,transactionsSerializer ,DepartmentSerializer
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

class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        user = utilisateurs.objects.filter(email=email).first()
        

        if user is None:
            raise AuthenticationFailed('User not found!')

        if  not user.check_password(password):
            raise AuthenticationFailed("Password incorrect")

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

class UserView(APIView):

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = utilisateurs.objects.filter(id=payload['id']).first()
        serializer = UtlisateursSerializer(user)
        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response



class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if utilisateurs.objects.filter(email=email).exists():
            user = utilisateurs.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            id=user.id
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = 'localhost:4200/resetpassword'
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            redirect_url =  request.data.get('redirect_url', '')
            absurl = 'http://'+current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)



class PasswordTokenCheckAPI(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):

        redirect_url = request.GET.get('redirect_url')

        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = utilisateurs.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                if len(redirect_url) > 3:
                    return CustomRedirect(redirect_url+'?token_valid=False')
                else:
                    return CustomRedirect(os.environ.get('http://localhost:4200/resetpassword', '')+'?token_valid=False')

            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(redirect_url+'?token_valid=True&message=Credentials Valid&uidb64='+uidb64+'&token='+token)
            else:
                return CustomRedirect(os.environ.get('http://localhost:4200/resetpassword', '')+'?token_valid=False')

        except DjangoUnicodeDecodeError as identifier:
            try:
                if not PasswordResetTokenGenerator().check_token(user):
                    return CustomRedirect(redirect_url+'?token_valid=False')
                    
            except UnboundLocalError as e:
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)

class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)

class RegisterView(APIView):
    def post(self, request):
        serializer = UtlisateursSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

def departmentApi(request,id=0):
    if request.method=='GET':
        transactionss=transactions.objects.all()
        transactionss_serializer=DepartmentSerializer(transactionss,many=True)
        return JsonResponse(transactionss_serializer.data,safe=False)