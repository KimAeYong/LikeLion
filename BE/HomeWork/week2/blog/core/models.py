from django.db import models
from django.contrib.auth.models import User

class Blog:
    title = models.CharField(max_length=20)
    introdution = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class Category:
    name = models.CharField(max_length=20)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
class Tag:
    name = models.CharField(max_length=20)
    def __init__(self):
        return self.name

class Post:
    title = models.CharField(max_length=200, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    body = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.title

class TagPost:
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class Comment:
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    def __str__(self):
        return self.comment

# Create your models here.