from django.urls import path
# from views import SignUpView
from . import views
#
# urlpatterns = [
#     path('login/', views.login, name="login"),
#     path('logout/', views.logout, name="logout"),
#     path('signup/', views.signup, name='signup'),
# ]

from .views import SignUpView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='register'),
    # path('/', SignUpView.as_view(), name='register')
]