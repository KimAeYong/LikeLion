from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from .models import *
from django.contrib.auth.models import User
from django.test import Client

class PostCRUDTestCase(TestCase):
    def setUp(self):
        #create dummy data
        self.user = get_user_model().objects.create_user(username='test', password='test')
        self.blog = Blog.objects.create(blogName='Test Blog', user=self.user)
        self.category = Category.objects.create(categoryName='Test Category', blog=self.blog)
        self.post = Post.objects.create(title='Test Post', body='Test body', category=self.category)

    def test_post_create_view(self):
        # self.user.login(username='test', password='test')
        response = self.user.get('post_create')
        self.assertEqual(response.status_code, 200)

    def test_post_detail_view(self):
        # self.user.login(username='test', password='test')
        response = self.user.get('post_detail', args=[self.post.pk])
        self.assertEqual(response.status_code, 200)

    def test_post_update_view(self):
        # self.user.login(username='test', password='test')
        response = self.user.get('post_update', args=[self.post.pk])
        self.assertEqual(response.status_code, 200)

    def test_post_delete_view(self):
        # self.user.login(username='test', password='test')
        response = self.user.get('post_delete', args=[self.post.pk])
        self.assertEqual(response.status_code, 200)