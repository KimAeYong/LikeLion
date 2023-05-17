from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Blog(models.Model):
    blogName = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.blogName

class Category(models.Model):
    categoryName = models.CharField(max_length=20)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    def __str__(self):
        return self.categoryName
    
class Post(models.Model):
    title = models.CharField(max_length=20)
    body = models.TextField()
    date = models.DateField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.title


class Tag(models.Model):
    tagName = models.CharField(max_length=20)
    def __str__(self):
        return self.tagName
    
class TagPost(models.Model):
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

class Comment(models.Model):
    comment = models.TextField()
    date = models.DateField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    def __str__(self):
        return self.comment




