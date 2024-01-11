from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    # Add other URL patterns for about, contact, etc. if required
]
