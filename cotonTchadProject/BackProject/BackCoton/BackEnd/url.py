from django.contrib import admin
from django.urls import path
from django.urls import re_path as url
from django.urls import path, include 
from . import views
 
urlpatterns = [
    path('departments',views.departmentApi)
]