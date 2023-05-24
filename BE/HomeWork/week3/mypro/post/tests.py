from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from .models import *
from django.contrib.auth.models import User
from django.test import Client
import json


class PostCRUDTestCase(TestCase):
    def setUp(self):
        # create dummy data
        self.user = User.objects.create_user(username="test", password="test")
        self.blog = Blog.objects.create(blogName="Test Blog", user=self.user)
        self.category = Category.objects.create(
            categoryName="Test Category", blog=self.blog
        )
        self.post = Post.objects.create(
            title="Test Post", body="Test body", category=self.category, date="2020-01-01"
        )

    def test_post_create_view(self):
        # self.user.login(username='test', password='test')
        client = Client()
        # print(Category.objects.get(categoryName="Test Category"))

        data = {"title": "Test Post", "body": "Test body", "category": self.category.pk}
        # print(type(data.))

        response = client.post(reverse("post_create"), data)
        self.assertEqual(response.status_code, 302)

    def test_post_detail_view(self):
        # self.user.login(username='test', password='test')
        client = Client()
        response = client.get(reverse("post_detail", args=[self.post.pk]))
        self.assertEqual(response.status_code, 200)

    def test_post_update_view(self):
        # self.user.login(username='test', password='test')
        client = Client()
        data = {"title": "Test Post", "body": "Test body", "category": self.category.pk, "date": "2020-01-01"}
        response = client.post(reverse("post_update", args=(self.post.pk,)), data)
        self.assertEqual(response.status_code, 302)

    def test_post_delete_view(self):
        # self.user.login(username='test', password='test')
        client = Client()
        response = client.get(reverse("post_delete", args=[self.post.pk]))
        self.assertEqual(response.status_code, 302)
