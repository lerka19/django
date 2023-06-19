from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('toggle_menu/', views.toggle_menu, name='toggle_menu'),
    path('home/', views.home, name='home'),
    path('gw/', views.gw, name='gw'),
    #path('zd/', views.zd, name='zd'),
    #path('set-language/', set_language, name='set_language'),
]
