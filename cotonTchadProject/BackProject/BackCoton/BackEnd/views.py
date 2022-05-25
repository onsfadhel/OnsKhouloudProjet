from django.contrib.auth.models import User, Group
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode 
from rest_framework import viewsets , generics , status ,views , permissions
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
import jwt , datetime
#sms twilio
import os
from twilio.rest import Client
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
from BackEnd.Serializers import ticketdepeseSerializer,stockcotonSerializer,bordlivintrantSerializer,facturelivraisonintrantSerializer, besoinSerializer ,ResponsableDeProductionSerializer, ResponsableCGISerializer, ResponsableFinancierSerializer, administrateurSerializer, stockSerializer, VehiculesApiSerializer,ResetPasswordEmailRequestSerializer,vehiculeSerializer,UtlisateursSerializer , FacturesProductionApiSerializer,ProduitsApiSerializer , ChauffeurSerializer ,UsinesSerializer
from BackEnd.Serializers import CozocSerializer,facturecotonSerializer, StockApiSerializer, ResponsableDePontBaculeSerializer, ResponsableLogistiqueSerializer, ProduitsApiSerializer, CodeSerializer, SetNewPasswordSerializer , ClientsApiSerializer, BorderauxdelivraisonSerializer ,transactionsSerializer ,TransactionsApiSerializer
from .models import ResponsableDeProduction,facturelivraisonintrant,stockcoton, ticketdepese,bordereauxlivraisonintrant, facturecoton, besoins, Cozoc, ResponsableDePontBacule, stock, ResponsableCGI, Administrateur, ResponsableFinancier, ResponsableLogistique, vehicules,facturedeproduction,utilisateurs ,clients,Code, chauffeurs, usines , Borderauxdelivraison , transactions , produits

class vehiculeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = vehicules.objects.all().order_by('id')
    serializer_class = vehiculeSerializer
    


class UtilisateursViewSet(viewsets.ModelViewSet):
    queryset= utilisateurs.objects.all().order_by('id')
    serializer_class = UtlisateursSerializer
    
class AdministrateurViewSet(viewsets.ModelViewSet):
    queryset= Administrateur.objects.all().order_by('id')
    serializer_class = administrateurSerializer

class ResponsableLogistiqueViewSet(viewsets.ModelViewSet):
    queryset= ResponsableLogistique.objects.all().order_by('id')
    serializer_class = ResponsableLogistiqueSerializer

class ResponsableFinancierViewSet(viewsets.ModelViewSet):
    queryset= ResponsableFinancier.objects.all().order_by('id')
    serializer_class = ResponsableFinancierSerializer

class ResponsableDeProductionViewSet(viewsets.ModelViewSet):
    queryset= ResponsableDeProduction.objects.all().order_by('id')
    serializer_class = ResponsableDeProductionSerializer

class ResponsableCGIViewSet(viewsets.ModelViewSet):
    queryset= ResponsableCGI.objects.all().order_by('id')
    serializer_class = ResponsableCGISerializer

class ResponsableDePontBaculeViewSet(viewsets.ModelViewSet):
    queryset= ResponsableDePontBacule.objects.all().order_by('id')
    serializer_class = ResponsableDePontBaculeSerializer

class CozocViewSet(viewsets.ModelViewSet):
    queryset= Cozoc.objects.all().order_by('id')
    serializer_class = CozocSerializer
class ChauffeursViewSet(viewsets.ModelViewSet):
    queryset = chauffeurs.objects.all().order_by('id')
    serializer_class = ChauffeurSerializer

class UsinesViewSet(viewsets.ModelViewSet):
    queryset = usines.objects.all().order_by('id')
    serializer_class = UsinesSerializer

class BorderauxdelivraisonViewSet(viewsets.ModelViewSet):
    queryset= Borderauxdelivraison.objects.all().order_by('id')
    serializer_class = BorderauxdelivraisonSerializer

class stockcotonViewSet(viewsets.ModelViewSet):
    queryset=stockcoton.objects.all().order_by('id')
    serializer_class= stockcotonSerializer

class facturecotonViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = facturecoton.objects.all()
    serializer_class = facturecotonSerializer
class transactionsViewSet(viewsets.ModelViewSet):
    queryset= transactions.objects.all().order_by('id')
    serializer_class = transactionsSerializer

class stockViewSet(viewsets.ModelViewSet):
    queryset=stock.objects.all().order_by('id')
    serializer_class=StockApiSerializer   

class produitsViewSet(viewsets.ModelViewSet):
    queryset= produits.objects.all().order_by('id')
    serializer_class = ProduitsApiSerializer
class clientsViewSet(viewsets.ModelViewSet):
    queryset= clients.objects.all().order_by('id')
    serializer_class = ClientsApiSerializer
class factureProductionViewSet(viewsets.ModelViewSet):
    queryset= facturedeproduction.objects.all().order_by('id')
    serializer_class = FacturesProductionApiSerializer
class ticketdepeseViewSet(viewsets.ModelViewSet):
    queryset= ticketdepese.objects.all().order_by('id')
    serializer_class = ticketdepeseSerializer
class besoinViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = besoins.objects.all()
    serializer_class = besoinSerializer
class bordereauxliViewSet(viewsets.ModelViewSet):
    queryset = bordereauxlivraisonintrant.objects.all()
    serializer_class = bordlivintrantSerializer
class facturelivraisonintrantViewSet(viewsets.ModelViewSet):
    queryset=facturelivraisonintrant.objects.all()
    serializer_class=facturelivraisonintrantSerializer
class envoiesms(APIView):
    
    def post(self,request):
        response=Response()
        #token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OSwiZXhwIjoxNjUwNDIwMDg5LCJpYXQiOjE2NTA0MTY0ODl9.wV7O2-a80l208sPGWndxUdLxVbzzhtvWdATsTRJx7GU"
        token=request.COOKIES.get('jwt')
        decoded=jwt.decode(token, 'secret', algorithm=['HS256'])
        

        userid=decoded['id']
        utilisateur=utilisateurs.objects.filter(id=userid).first()
        code= Code.objects.filter(user=utilisateur).first()
        client = Client("ACab325c21c3d473795ade3ac2327109ff", "f4998829a2fed0b2bc32c8fc0b234316" )
        message = client.messages.create(
            to= str(code.user.phone), 
            from_="+19705949157", # insert trial number 
            body="Your CotonTchad verification Codes is : "+code.number) 
        response.data = {
            'message': 'succés'
        }
        return response

class CodePhone(generics.GenericAPIView):
    serializer_class =CodeSerializer
    def post(self,request):
        token = request.COOKIES.get('jwt')
        
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        
        utilisateur=utilisateurs.objects.filter(id=payload['id']).first()
        serializer = UtlisateursSerializer(utilisateur)
        code= Code.objects.get(user=utilisateur)
        codenumber = code.number
        code_user = f"{code.user.email}: {codenumber}"
        response=Response()
        print(code.user.phone)
            
        #send sms
        number = request.data.get('number')
        if str(codenumber)== number : 
            code.save()
        
            response.data ="succés"
        else :
            response.data ="veuillez vérifiez votre code"
        return response


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

        response.set_cookie(key='jwt', value=token, httponly=True ,samesite='None', secure=True)
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

def transactionsApi(request,id=0):
    if request.method=='GET':
        transactionss=transactions.objects.all()
        transactionss_serializer=TransactionsApiSerializer(transactionss,many=True)
        return JsonResponse(transactionss_serializer.data,safe=False)
def vehiculesApi(request,id=0):
    if request.method=='GET':
        vehiculess= vehicules.objects.all()
        vehicules_serializer=VehiculesApiSerializer(vehiculess,many=True)
        return JsonResponse(vehicules_serializer.data,safe=False)

def produitsApi(request,id=0):
    if request.method=='GET':
        produitss= produits.objects.all().order_by('mois')
        produits_serialize=ProduitsApiSerializer(produitss,many=True)
        return JsonResponse(produits_serialize.data,safe=False)
def stockProduitsApi(request,id=0):
    if request.method=='GET':
        stockproduits=stock.objects.all().order_by('mois')
        stockproduit_serializer=stockSerializer(stockproduits,many=True)
        return JsonResponse(stockproduit_serializer.data,safe=False)


