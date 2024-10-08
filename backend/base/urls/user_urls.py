# ECOMMERCE/backend/base/urls/user_urls.py


from django.urls import path
from base.views import user_views as views



urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), 
         name='token_obtain_pair'),
    
    path('register/', views.registerUser, name='register'),
    
    path('profile/', views.getUserProfile, name="-profile"),
    
    path('', views.getUsers, name=""),
     
] 