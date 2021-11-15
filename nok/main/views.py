from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, 'main/index.html', {'title': 'Главная'})

def docs(request):
    return render(request, 'main/docs.html', {'title': 'Документы'})

def news(request):
    return render(request, 'main/news.html', {'title': 'Новости'})

def mk(request):
    return render(request, 'main/mk.html', {'title': 'Мастер-Классы'})