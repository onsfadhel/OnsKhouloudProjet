from django.contrib import admin
from .models import vehicules , utilisateurs ,chauffeurs ,usines ,Borderauxdelivraison , transactions
# Register your models here.
admin.site.register(vehicules)
admin.site.register(utilisateurs)
admin.site.register(chauffeurs)
admin.site.register(usines)
admin.site.register(Borderauxdelivraison)
admin.site.register(transactions)
