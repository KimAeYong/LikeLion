from django.contrib import admin
from .models import Blog, Category, Post, Tag, TagPost, Comment
# Register your models here.
admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(Post)
admin.site.register(Tag)
admin.site.register(TagPost)
admin.site.register(Comment)

