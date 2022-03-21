from django.contrib import admin
from .models import vehicules , utilisateurs ,chauffeurs ,usines
# Register your models here.
admin.site.register(vehicules)
admin.site.register(utilisateurs)
admin.site.register(chauffeurs)
admin.site.register(usines)