from django.contrib import admin

# Register your models here.
from .models import User

admin.site.register(User)


# the below code fragment can be found in: