from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.conf import settings

def index(request):
    return render(request, 'main/index.html')

def toggle_menu(request):
    response_data = {
        'message': 'Hamburger'
    }
    return JsonResponse(response_data)

def home(request):
    response_data = {
        'message': 'Strona główna'
    }
    return JsonResponse(response_data)

def gw(request):
    response_data = {
        'message': 'Gwiazdy'
    }
    return JsonResponse(response_data)

