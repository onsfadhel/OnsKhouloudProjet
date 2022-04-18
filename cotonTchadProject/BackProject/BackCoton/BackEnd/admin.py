from django.contrib import admin
from .models import vehicules , utilisateurs, facturedeproduction,clients ,chauffeurs ,usines ,Borderauxdelivraison , transactions , produits
# Register your models here.
admin.site.register(vehicules)
admin.site.register(utilisateurs)
admin.site.register(chauffeurs)
admin.site.register(usines)
admin.site.register(Borderauxdelivraison)
admin.site.register(transactions)
admin.site.register(produits)
admin.site.register(clients)
admin.site.register(facturedeproduction)
