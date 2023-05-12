from django.db import models
from django.contrib.auth.models import User

class User: 
    user = User

class Blog:
    blogName = models.CharField(max_length=20, on_delete=models.CASCADE)
    def __str__(self):
        return self.blogNmae

class Category:
    categoryName = models.CharField(max_length=20, on_delete=models.CASCADE)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)

# Create your models here.
