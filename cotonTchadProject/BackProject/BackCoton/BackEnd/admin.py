from django.contrib import admin
from .models import vehicules ,facturelivraisonintrant,stockcoton, utilisateurs,stock,clients,bordereauxlivraisonintrant , facturecoton,ticketdepese, besoins, facturedeproduction,chauffeurs ,usines ,Borderauxdelivraison , transactions, Code  , produits
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
admin.site.register(Code)
admin.site.register(stock)
admin.site.register(ticketdepese)
admin.site.register(besoins)
admin.site.register(facturecoton)
admin.site.register(bordereauxlivraisonintrant)
admin.site.register(facturelivraisonintrant)
admin.site.register(stockcoton)
