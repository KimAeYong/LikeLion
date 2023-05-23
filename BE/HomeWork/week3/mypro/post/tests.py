# from django.test import TestCase
from django.contrib.auth.models import User
# from .models import Blog, Post, Category

# class Test(TestCase):
#     def test_init(self):
#         self.user = User.objects.create_user(username='test', password='test')
#         self.blog = Blog.objects.create(blogName='test', user=self.user)
#         self.category = Category.objects.create(categoryName='test', blog=self.blog)
#         self.post = Post.objects.create(title='test', body='test', category=self.blog)
from django.test import TestCase
from django.urls import reverse
from .models import Post, Blog, Category, User

class PostCRUDTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='test', password='test')
        self.blog = Blog.objects.create(blogName='test', user=self.user)
        self.category = Category.objects.create(categoryName='test', blog=self.blog)
        self.post = Post.objects.create(title='test', body='test', category=self.blog)

    def test_post_create(self):
        response = self.client.post(reverse('post_create'), {
            'title': 'New Post',
            'body': 'This is a new post.',
            'date': '2023-05-23',
            'category': 'newCatagory'
        })
        self.assertEqual(response.status_code, 302)  # Check if the post was created successfully
        self.assertEqual(Post.objects.count(), 2)  # Check if the number of posts increased by 1

    def test_post_detail(self):
        response = self.client.get(reverse('post_detail', args=[self.post.pk]))
        self.assertEqual(response.status_code, 200)  # Check if the post detail page is accessible
        self.assertContains(response, self.post.title)  # Check if the post title is present in the response

    def test_post_update(self):
        response = self.client.post(reverse('post_update', args=[self.post.pk]), {
            'title': 'Updated Post',
            'body': 'This is an updated post.',
            'date': '2023-05-23',
            'category': 'Updated Category'
        })
        self.assertEqual(response.status_code, 302)  # Check if the post was updated successfully
        self.post.refresh_from_db()
        self.assertEqual(self.post.title, 'Updated Post')  # Check if the post title was updated

    def test_post_delete(self):
        response = self.client.post(reverse('post_delete', args=[self.post.pk]))
        self.assertEqual(response.status_code, 302)  # Check if the post was deleted successfully
        self.assertEqual(Post.objects.count(), 0)  # Check if the post was deleted from the database
