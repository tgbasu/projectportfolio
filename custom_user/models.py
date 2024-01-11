from django.db import models
from django_use_email_as_username.models import BaseUser, BaseUserManager


class CustomUserManager(BaseUserManager):
    pass  # You can add custom manager methods if needed


class User(BaseUser):
    # Fields in registration form
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)

    # Replace this line if you want to use your CustomUserManager
    objects = CustomUserManager()
