from django.core.mail import send_mail
from django.conf import settings


def send_email_verification(email, token):
    subject = 'Verify Your Email'
    message = f'Your verification code is: {token}'
    send_mail(subject, message, settings.EMAIL_HOST_USER, [email])
