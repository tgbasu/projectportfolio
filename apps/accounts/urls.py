from django.urls import path
from . import views
from .views import dashboard_view


urlpatterns = [
    path('login/', views.login_view, name='login'),

    path('register/', views.register_view, name='register'),
    # Add other URL patterns for registration, profile, etc. if required

    #path('verify_otp/', views.verify_email_view, name='verify_otp'),

    path('dashboard/', dashboard_view, name='dashboard'),

    path('logout/', views.logout_view, name='logout'),

]
