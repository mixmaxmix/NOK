from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('docs/', views.docs),
    path('news/', views.news),
    path('master-class/', views.mk),
]