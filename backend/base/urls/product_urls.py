# ECOMMERCE/backend/base/urls/product_urls.py


from django.urls import path
from base.views import product_views as views

urlpatterns = [
    
     
    path('', views.getProducts, name="products"),
    path('<str:pk>/', views.getProduct, name="product"),
]