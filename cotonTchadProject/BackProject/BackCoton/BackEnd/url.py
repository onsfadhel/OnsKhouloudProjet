from django.contrib import admin
from django.urls import path
from django.urls import re_path as url
from django.urls import path, include 
from . import views
 
urlpatterns = [
    path('transactionsApi',views.transactionsApi),
    path('vehiculesApi',views.vehiculesApi),
    path('venteProduitApi',views.produitsApi),
    path('stockproduitss',views.stockProduitsApi),
]