from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from custom_user.forms import CustomUserCreationForm
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django_otp.plugins.otp_email.models import EmailDevice
from django_otp.plugins.otp_totp.models import TOTPDevice
from django.core.mail import send_mail
from .utils import send_email_verification
from django_otp.decorators import otp_required


def register_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registration successful!')
            return redirect('login')  # Redirect or render a success message

    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')  # Redirect or render a success message
    return render(request, 'accounts/login.html')


@login_required
def dashboard_view(request):
    user = request.user  # Fetch the logged-in user
    context = {
        'first_name': user.first_name,
        'last_name': user.last_name,
        'email': user.email,
    }
    return render(request, 'accounts/dashboard.html', context)


def logout_view(request):
    logout(request)  # Log the user out
    return redirect(reverse('home'))
