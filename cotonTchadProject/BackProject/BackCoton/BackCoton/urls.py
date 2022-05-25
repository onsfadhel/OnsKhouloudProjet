"""BackCoton URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include 
from django.conf.urls.static import static
from django.urls import re_path as url
from rest_framework import routers
from BackEnd import url
from BackEnd import views
from django.conf import settings
import BackEnd.views
from BackEnd.views import CodePhone,RequestPasswordResetEmail,envoiesms, PasswordTokenCheckAPI, SetNewPasswordAPIView , LoginView ,LogoutView ,UserView ,RegisterView 
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = routers.DefaultRouter()
#router.register(r'users', views.UserViewSet)
router.register(r'vehicules', views.vehiculeViewSet)
router.register(r'utilisateurs', views.UtilisateursViewSet)
router.register(r'chauffeurs',views.ChauffeursViewSet)
router.register(r'usines',views.UsinesViewSet)
router.register(r'produits',views.produitsViewSet)
router.register(r'bordereauxtransport',views.BorderauxdelivraisonViewSet)
router.register(r'transactions',views.transactionsViewSet)
router.register(r'clients',views.clientsViewSet)
router.register(r'factureProduction',views.factureProductionViewSet)
router.register(r'stockproduits',views.stockViewSet)
router.register(r'administarteurs',views.AdministrateurViewSet)
router.register(r'responsableslogistiques',views.ResponsableLogistiqueViewSet)
router.register(r'responsablesfinanciers',views.ResponsableFinancierViewSet)
router.register(r'responsablesdeproduction',views.ResponsableDeProductionViewSet)
router.register(r'responsablescgi',views.ResponsableCGIViewSet)
router.register(r'responsablesdepontbascule',views.ResponsableDePontBaculeViewSet)
router.register(r'cozocs',views.CozocViewSet)
router.register(r'ticketsdepeses',views.ticketdepeseViewSet)
router.register(r'besoins',views.besoinViewSet)
router.register(r'facturescoton',views.facturecotonViewSet)
router.register(r'bordereauxdelivraisondesintrants',views.bordereauxliViewSet)
router.register(r'facturelivraisonintrant',views.facturelivraisonintrantViewSet)
router.register(r'stockcotoncollecte',views.stockcotonViewSet)
urlpatterns = [
     path('admin/', admin.site.urls),
     path('', include(router.urls)),
     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('request-reset-email/', RequestPasswordResetEmail.as_view(),name="request-reset-email"),
     path('password-reset/<uidb64>/<token>/', PasswordTokenCheckAPI.as_view(), name='password-reset-confirm'),
     path('register', RegisterView.as_view()),
     path('password-reset-complete', SetNewPasswordAPIView.as_view(), name='password-reset-complete'),
     path('login',LoginView.as_view()),
     path('logout', LogoutView.as_view()),
     path('',include('BackEnd.url')),
     path('userJwt',UserView.as_view()),
     path('envoiesms',envoiesms.as_view()),
     path('code',CodePhone.as_view()),
     path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
