from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    #cascade: 탈퇴 시(삭제 시) 다 날아감

    def __str__ (self):
        return self.comment
    